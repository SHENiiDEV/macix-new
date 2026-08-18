<?php

namespace App\Http\Controllers;

use App\Services\WalletService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WalletController extends Controller
{
    public function __construct(protected WalletService $walletService)
    {
    }

    /**
     * Show billing history and wallet top-up dashboard
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        $transactions = $user->transactions()
            ->with('invoice')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('Billing/Index', [
            'transactions' => $transactions,
            'walletBalance' => (float) $user->wallet_balance,
        ]);
    }

    /**
     * Process Top-Up
     */
    public function topUp(Request $request)
    {
        $validated = $request->validate([
            'amount' => ['required', 'numeric', 'min:10', 'max:50000'],
            'payment_method' => ['nullable', 'string', 'in:card_instant,wire_transfer'],
        ]);

        $user = $request->user();
        $amount = (float) $validated['amount'];
        $paymentMethod = $validated['payment_method'] ?? 'card_instant';

        try {
            $result = $this->walletService->topUp($user, $amount, $paymentMethod);

            return back()->with('success', "Successfully credited €" . number_format($amount, 2) . " to your wallet. Invoice #" . $result['invoice']->invoice_number . " has been issued and emailed.");
        } catch (\Throwable $e) {
            return back()->withErrors(['amount' => $e->getMessage()]);
        }
    }
}
