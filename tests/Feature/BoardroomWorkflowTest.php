<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\BoardSession;
use App\Models\Invoice;
use App\Models\Transaction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class BoardroomWorkflowTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register_and_receive_welcome_email()
    {
        Mail::fake();

        $response = $this->post('/register', [
            'first_name' => 'Alexander',
            'last_name' => 'Vance',
            'email' => 'alex@vancecap.co.uk',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!',
            'phone' => '+44 20 7946 0912',
            'date_of_birth' => '1988-05-14',
            'address_street' => '100 Bishopsgate, Suite 24',
            'address_city' => 'London',
            'address_country' => 'United Kingdom',
            'address_postcode' => 'EC2N 4AG',
            'terms' => true,
            'company_name' => 'Vance Capital Partners',
            'vat_number' => 'GB987654321',
        ]);

        $response->assertRedirect('/dashboard');
        $this->assertDatabaseHas('users', [
            'email' => 'alex@vancecap.co.uk',
            'first_name' => 'Alexander',
            'last_name' => 'Vance',
            'name' => 'Alexander Vance',
            'address_city' => 'London',
            'address_country' => 'United Kingdom',
            'wallet_balance' => 0.00,
        ]);
    }

    public function test_sanctioned_country_registration_is_blocked()
    {
        $response = $this->post('/register', [
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'test@sanctioned.com',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!',
            'phone' => '+123456789',
            'date_of_birth' => '1990-01-01',
            'address_street' => 'Street 1',
            'address_city' => 'City',
            'address_country' => 'Russia',
            'address_postcode' => '12345',
            'terms' => true,
        ]);

        $response->assertSessionHasErrors(['address_country']);
    }

    public function test_user_can_top_up_wallet_and_receive_invoice()
    {
        Mail::fake();

        $user = User::factory()->create([
            'wallet_balance' => 0.00,
            'company_name' => 'Vance Capital Partners',
            'vat_number' => 'GB987654321',
        ]);

        $response = $this->actingAs($user)->post('/wallet/top-up', [
            'amount' => 499.00,
            'payment_method' => 'card_instant',
        ]);

        $response->assertSessionHasNoErrors();
        $user->refresh();

        $this->assertEquals(499.00, (float) $user->wallet_balance);
        $this->assertDatabaseHas('transactions', [
            'user_id' => $user->id,
            'type' => 'top_up',
            'amount_eur' => 499.00,
            'service_name' => 'Wallet Balance Top-Up (€499.00)',
        ]);
        $this->assertDatabaseHas('invoices', [
            'user_id' => $user->id,
            'total_eur' => 499.00,
            'vat_rate_percent' => 0.00,
            'status' => 'PAID',
        ]);
    }

    public function test_insufficient_funds_blocks_convening_board()
    {
        $user = User::factory()->create([
            'wallet_balance' => 50.00,
        ]);

        $response = $this->actingAs($user)->post('/board/convene', [
            'tier' => 'starter',
            'title' => 'Crisis Session',
            'brief_text' => 'We are running out of cash in 3 months and need immediate advice on restructuring headcount.',
        ]);

        $response->assertSessionHasErrors(['insufficient_funds']);
    }

    public function test_convening_board_debits_wallet_and_creates_resolution()
    {
        Mail::fake();

        $user = User::factory()->create([
            'wallet_balance' => 500.00,
        ]);

        $response = $this->actingAs($user)->post('/board/convene', [
            'tier' => 'pro',
            'title' => 'Critical Cash Runway & Layoff Dilemma',
            'brief_text' => 'We have 4 months of cash remaining at current burn. To survive, we must choose between laying off 20% of engineering or taking a down-round bridge loan.',
            'company_context' => 'MRR: €50k | Burn: €40k | Runway: 4 months',
        ]);

        $user->refresh();
        $this->assertEquals(1.00, (float) $user->wallet_balance); // 500 - 499 = 1.00

        $this->assertDatabaseHas('board_sessions', [
            'user_id' => $user->id,
            'tier' => 'pro',
            'cost_eur' => 499.00,
            'status' => 'completed',
        ]);

        $session = BoardSession::where('user_id', $user->id)->first();
        $this->assertNotNull($session->resolution);
        $this->assertNotEmpty($session->resolution->investor_opinion);
        $this->assertNotEmpty($session->resolution->chairman_summary);
        $this->assertNotEmpty($session->resolution->action_plan);
    }

    public function test_legal_routes_are_accessible()
    {
        $this->get('/terms')->assertOk();
        $this->get('/privacy')->assertOk();
        $this->get('/refund')->assertOk();
    }

    public function test_invoice_and_minutes_pdf_downloads()
    {
        $user = User::factory()->create(['wallet_balance' => 1000.00]);
        $otherUser = User::factory()->create(['wallet_balance' => 100.00]);
        
        // Top up to get invoice
        $this->actingAs($user)->post('/wallet/top-up', ['amount' => 499.00]);
        $invoice = Invoice::where('user_id', $user->id)->first();

        // Download via /wallet/invoice/{id}
        $walletInvResponse = $this->actingAs($user)->get("/wallet/invoice/{$invoice->id}");
        $walletInvResponse->assertOk();
        $this->assertEquals('application/pdf', $walletInvResponse->headers->get('Content-Type'));

        // Access control: other user blocked with 403
        $this->actingAs($otherUser)->get("/wallet/invoice/{$invoice->id}")->assertForbidden();

        // Download via /invoices/{id}/download
        $invResponse = $this->actingAs($user)->get("/invoices/{$invoice->id}/download");
        $invResponse->assertOk();
        $this->assertEquals('application/pdf', $invResponse->headers->get('Content-Type'));

        // Convene board
        $this->actingAs($user)->post('/board/convene', [
            'tier' => 'starter',
            'title' => 'Founder Dispute',
            'brief_text' => 'We are facing a co-founder disagreement over equity distribution and future company direction.',
        ]);
        $session = BoardSession::where('user_id', $user->id)->first();

        $minResponse = $this->actingAs($user)->get("/board/{$session->id}/export-minutes");
        $minResponse->assertOk();
        $this->assertEquals('application/pdf', $minResponse->headers->get('Content-Type'));
    }
}
