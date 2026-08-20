<?php

namespace App\Services;

use App\Mail\WalletTopUpMail;
use App\Models\Invoice;
use App\Models\Transaction;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class WalletService
{
    /**
     * Top-up user wallet balance, log transaction, issue official invoice, send email
     */
    public function topUp(User $user, float $amount, string $paymentMethod = 'card_instant'): array
    {
        if ($amount <= 0) {
            throw new Exception("Top-up amount must be greater than zero.");
        }

        return DB::transaction(function () use ($user, $amount, $paymentMethod) {
            $user = User::where('id', $user->id)->lockForUpdate()->first();

            $balanceBefore = (float) $user->wallet_balance;
            $balanceAfter = $balanceBefore + $amount;

            $reference = 'TXN-' . date('Y') . '-' . strtoupper(Str::random(6));

            // Format strict service name
            $serviceName = "Wallet Balance Top-Up (€" . number_format($amount, 2) . ")";

            // Create Transaction
            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference' => $reference,
                'type' => 'top_up',
                'service_name' => $serviceName,
                'amount_eur' => $amount,
                'balance_before' => $balanceBefore,
                'balance_after' => $balanceAfter,
                'status' => 'completed',
                'payment_method' => $paymentMethod,
                'metadata' => [
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                ],
            ]);

            // Generate unique invoice number
            $invoiceNumber = 'INV-' . date('Y') . '-' . str_pad(Invoice::count() + 1042, 5, '0', STR_PAD_LEFT);

            // Create Invoice
            $invoice = Invoice::create([
                'user_id' => $user->id,
                'transaction_id' => $transaction->id,
                'invoice_number' => $invoiceNumber,
                'customer_name' => $user->name,
                'customer_company' => $user->company_name ?: $user->name,
                'customer_email' => $user->email,
                'customer_vat' => $user->vat_number,
                'customer_address' => $user->billing_address,
                'subtotal_eur' => $amount,
                'vat_rate_percent' => 0.00,
                'vat_amount_eur' => 0.00,
                'total_eur' => $amount,
                'service_name' => $serviceName,
                'status' => 'PAID',
                'issued_at' => now(),
            ]);

            // Update user balance
            $user->update(['wallet_balance' => $balanceAfter]);

            // Send transactional receipt & invoice email safely
            try {
                Mail::to($user->email)->send(new WalletTopUpMail($user, $transaction, $invoice));
            } catch (\Throwable $e) {
                // Log mail sending error without breaking transaction
                \Illuminate\Support\Facades\Log::warning("Could not send TopUp email: " . $e->getMessage());
            }

            return [
                'user' => $user,
                'transaction' => $transaction,
                'invoice' => $invoice,
            ];
        });
    }

    /**
     * Debit wallet balance for Board Session with strict service name and official invoice
     */
    public function chargeForSession(User $user, string $tier, float $costEur, string $briefTitle = ''): array
    {
        return DB::transaction(function () use ($user, $tier, $costEur, $briefTitle) {
            $user = User::where('id', $user->id)->lockForUpdate()->first();

            $currentBalance = (float) $user->wallet_balance;

            if ($currentBalance < $costEur) {
                throw new Exception("Insufficient wallet funds (€" . number_format($currentBalance, 2) . " available, €" . number_format($costEur, 2) . " required). Please top up your wallet.");
            }

            $balanceAfter = $currentBalance - $costEur;

            // Map strict service name
            $serviceName = match ($tier) {
                'pro' => "Pro Custom Board Session (€" . number_format($costEur, 2) . ")",
                'enterprise' => "Enterprise Retainer Session (€" . number_format($costEur, 2) . ")",
                default => "Starter Board Resolution (€" . number_format($costEur, 2) . ")",
            };

            $reference = 'SESS-' . date('Y') . '-' . strtoupper(Str::random(6));

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference' => $reference,
                'type' => 'board_session',
                'service_name' => $serviceName,
                'amount_eur' => -$costEur,
                'balance_before' => $currentBalance,
                'balance_after' => $balanceAfter,
                'status' => 'completed',
                'payment_method' => 'wallet_debit',
                'metadata' => [
                    'tier' => $tier,
                    'title' => $briefTitle,
                ],
            ]);

            // Generate unique invoice number
            $invoiceNumber = 'INV-' . date('Y') . '-' . str_pad(Invoice::count() + 1042, 5, '0', STR_PAD_LEFT);

            // Create Invoice
            $invoice = Invoice::create([
                'user_id' => $user->id,
                'transaction_id' => $transaction->id,
                'invoice_number' => $invoiceNumber,
                'customer_name' => $user->name,
                'customer_company' => $user->company_name ?: $user->name,
                'customer_email' => $user->email,
                'customer_vat' => $user->vat_number,
                'customer_address' => $user->billing_address,
                'subtotal_eur' => $costEur,
                'vat_rate_percent' => 0.00,
                'vat_amount_eur' => 0.00,
                'total_eur' => $costEur,
                'service_name' => $serviceName,
                'status' => 'PAID',
                'issued_at' => now(),
            ]);

            $user->update(['wallet_balance' => $balanceAfter]);

            return [
                'transaction' => $transaction,
                'invoice' => $invoice,
            ];
        });
    }
}
