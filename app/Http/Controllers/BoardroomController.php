<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmationMail;
use App\Models\BoardSession;
use App\Services\DeepSeekBoardService;
use App\Services\WalletService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class BoardroomController extends Controller
{
    public function __construct(
        protected WalletService $walletService,
        protected DeepSeekBoardService $boardService
    ) {
    }

    /**
     * Landing Page
     */
    public function landing(): Response
    {
        return Inertia::render('Landing');
    }

    /**
     * Executive Dashboard
     */
    public function dashboard(Request $request): Response
    {
        $user = $request->user();

        $recentSessions = $user->boardSessions()
            ->with('resolution')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        $stats = [
            'total_sessions' => $user->boardSessions()->count(),
            'wallet_balance' => (float) $user->wallet_balance,
            'latest_consensus' => $recentSessions->first()?->resolution?->consensus_score ?? null,
            'latest_verdict' => $recentSessions->first()?->resolution?->strategic_verdict ?? null,
        ];

        return Inertia::render('Dashboard', [
            'recentSessions' => $recentSessions,
            'stats' => $stats,
        ]);
    }

    /**
     * New Session Briefing Form
     */
    public function create(Request $request): Response
    {
        $selectedTier = $request->query('tier', 'starter');

        return Inertia::render('Boardroom/NewSession', [
            'initialTier' => $selectedTier,
            'walletBalance' => (float) $request->user()->wallet_balance,
        ]);
    }

    /**
     * Convene the Board (Validate -> Check Wallet -> Debit -> Run AI Deliberation)
     */
    public function convene(Request $request)
    {
        $validated = $request->validate([
            'tier' => ['required', 'string', 'in:starter,pro,enterprise'],
            'title' => ['nullable', 'string', 'max:255'],
            'brief_text' => ['required', 'string', 'min:30'],
            'company_context' => ['nullable', 'string', 'max:2000'],
            'custom_advisors' => ['nullable', 'array'],
        ]);

        $user = $request->user();
        $tier = $validated['tier'];

        // Determine price
        $costs = [
            'starter' => 149.00,
            'pro' => 499.00,
            'enterprise' => 1499.00,
        ];
        $costEur = $costs[$tier] ?? 149.00;

        // Check if balance is sufficient
        if ((float) $user->wallet_balance < $costEur) {
            return back()->withErrors([
                'insufficient_funds' => true,
                'required_amount' => $costEur,
                'wallet_balance' => (float) $user->wallet_balance,
                'message' => "Insufficient balance (€" . number_format($user->wallet_balance, 2) . " available, €" . number_format($costEur, 2) . " required). Please top up your wallet to convene the Board.",
            ]);
        }

        // 1. Debit Wallet with strict service logging and invoice generation
        $charge = $this->walletService->chargeForSession(
            $user,
            $tier,
            $costEur,
            $validated['title'] ?? 'Strategic Board Dilemma'
        );
        $transaction = $charge['transaction'];
        $invoice = $charge['invoice'];

        // 2. Create Board Session
        $session = BoardSession::create([
            'user_id' => $user->id,
            'tier' => $tier,
            'title' => $validated['title'] ?: 'Strategic Board Session (' . ucfirst($tier) . ')',
            'brief_text' => $validated['brief_text'],
            'company_context' => $validated['company_context'] ?? null,
            'custom_advisors' => $validated['custom_advisors'] ?? null,
            'cost_eur' => $costEur,
            'status' => 'deliberating',
        ]);

        // 3. Execute AI Deliberation
        $resolution = $this->boardService->deliberate($session);
        $session->update(['status' => 'completed']);

        // 4. Send Document Payment & Official Invoice Email
        try {
            Mail::to($user->email)->send(new \App\Mail\DocumentPaymentMail($user, $session, $invoice, $transaction));
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::warning("Document payment email error: " . $e->getMessage());
        }

        // Return redirect to the deliberation animation transition page or resolution directly
        return redirect()->route('board.resolution', ['id' => $session->id])
            ->with('success', 'The Board of Advisors has completed their deliberation.');
    }

    /**
     * Deliberation Animation / Progress Screen
     */
    public function deliberating(Request $request, int $id): Response
    {
        $session = BoardSession::where('user_id', $request->user()->id)->findOrFail($id);

        return Inertia::render('Boardroom/Deliberation', [
            'session' => $session,
        ]);
    }

    /**
     * View Completed Resolution
     */
    public function resolution(Request $request, int $id): Response|\Illuminate\Http\RedirectResponse
    {
        $session = BoardSession::with('resolution')
            ->where('user_id', $request->user()->id)
            ->findOrFail($id);

        if (!$session->resolution) {
            // Auto-complete deliberation if previously interrupted
            $this->boardService->deliberate($session);
            $session->refresh()->load('resolution');
        }

        return Inertia::render('Boardroom/Resolution', [
            'session' => $session,
            'resolution' => $session->resolution,
        ]);
    }

    /**
     * List all past board sessions
     */
    public function history(Request $request): Response
    {
        $sessions = BoardSession::with('resolution')
            ->where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Boardroom/History', [
            'sessions' => $sessions,
        ]);
    }
}
