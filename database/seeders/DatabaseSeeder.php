<?php

namespace Database\Seeders;

use App\Models\BoardResolution;
use App\Models\BoardSession;
use App\Models\Invoice;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Executive Demo User
        $user = User::create([
            'name' => 'Alexander Vance',
            'email' => 'founder@macix.co.uk',
            'password' => Hash::make('password'),
            'company_name' => 'Vance Capital & Technologies Ltd',
            'vat_number' => 'GB987654321',
            'billing_address' => '100 Bishopsgate, Level 24, London, EC2N 4AG, United Kingdom',
            'phone' => '+44 20 7946 0912',
            'wallet_balance' => 1499.00,
            'is_admin' => true,
        ]);

        // 2. Initial Top-Up Transaction & Invoice
        $txn = Transaction::create([
            'user_id' => $user->id,
            'reference' => 'TXN-2026-884910',
            'type' => 'top_up',
            'service_name' => 'Wallet Balance Top-Up (€1,499.00)',
            'amount_eur' => 1499.00,
            'balance_before' => 0.00,
            'balance_after' => 1499.00,
            'status' => 'completed',
            'payment_method' => 'card_instant',
        ]);

        Invoice::create([
            'user_id' => $user->id,
            'transaction_id' => $txn->id,
            'invoice_number' => 'INV-2026-00101',
            'customer_name' => $user->name,
            'customer_company' => $user->company_name,
            'customer_email' => $user->email,
            'customer_vat' => $user->vat_number,
            'customer_address' => $user->billing_address,
            'subtotal_eur' => 1499.00,
            'vat_rate_percent' => 0.00,
            'vat_amount_eur' => 0.00,
            'total_eur' => 1499.00,
            'service_name' => 'Wallet Balance Top-Up (€1,499.00)',
            'status' => 'PAID',
            'issued_at' => now()->subDays(2),
        ]);

        // 3. Sample Completed Board Session
        $session = BoardSession::create([
            'user_id' => $user->id,
            'tier' => 'pro',
            'title' => 'Critical Runway Crunch: 20% Team Layoff vs Down-Round Bridge',
            'brief_text' => 'We have 4.5 months of cash runway remaining at current burn. Our revenue growth stalled this quarter from 15% MoM to 2% MoM. To reach default-alive status, we need to cut 20% of headcount (8 engineers and 2 SDRs), but our lead architects warn this will destroy product velocity and shatter morale. Should we execute a fast, ruthless layoff now or pursue an aggressive bridge round at a 30% valuation haircut?',
            'company_context' => 'MRR: €65,000 | Monthly Burn: €48,000 | Runway: 4.5 months | Team Size: 28 FTEs | Prior Funding: €1.5M Seed',
            'custom_advisors' => ['M&A & Restructuring Specialist', 'B2B Enterprise Growth CMO'],
            'cost_eur' => 499.00,
            'status' => 'completed',
            'created_at' => now()->subDays(1),
        ]);

        // Resolution
        BoardResolution::create([
            'board_session_id' => $session->id,
            'strategic_verdict' => 'EXTEND RUNWAY THROUGH AGGRESSIVE TRIM & RE-NEGOTIATION',
            'consensus_score' => 86,
            'risk_score' => 'CRITICAL',
            'chairman_summary' => "The Board of Advisors has reached a decisive consensus: While financial reality requires an immediate extension of cash runway to default-alive status, execution must be swift, humane, and singular. The Investor's mandate for capital preservation must be balanced with the Mentor's outplacement transparency and the Operator's SLA safeguards. Do not execute rolling layoffs; implement a singular, comprehensive restructuring paired with immediate vendor contract renegotiations and aggressive pipeline prioritization.",
            'investor_opinion' => [
                'quote' => 'A company that runs out of cash has zero options. Sentimentality will bankrupt your balance sheet.',
                'analysis' => 'Examining your current cash position against runway indicators reveals that immediate defensive posture is required. Discretionary spending must be frozen within 48 hours. If workforce reduction is necessary, executing a single, decisive restructuring cut with dignified severance packages is vastly superior to incremental monthly attrition. Furthermore, renegotiate all SaaS vendor licenses and defer executive compensation into equity incentives to immediately preserve liquidity.',
                'recommendations' => [
                    'Immediately audit top 20 operating expense line items and enact a freeze on non-essential procurement.',
                    'If conducting headcount restructuring, execute in a single round (minimum 18-22% cost reduction) rather than staggered cuts.',
                    'Initiate proactive outreach to top existing equity holders with a convertible bridge note option.'
                ],
                'risk_alert' => 'Runway dropping below 4 months before unit-economics stabilization.'
            ],
            'mentor_opinion' => [
                'quote' => 'How you treat departing employees dictates whether the remaining team will ever trust your vision again.',
                'analysis' => 'Turbulent financial corrections often induce severe cognitive fatigue and isolated panic in leadership. While the numbers demand discipline, remember that your retained core team is watching your emotional composure. If cuts must occur, communicate with radical transparency: take personal accountability, explain the macro context, and provide direct outplacement support.',
                'recommendations' => [
                    'Host an open, unscripted all-hands meeting immediately following any organizational adjustments.',
                    'Conduct confidential 1-on-1 check-ins with your top 5 irreplaceable key contributors to secure psychological buy-in.',
                    'Block 60 minutes daily for founder mental decompression to prevent reactive, panic-driven decision making.'
                ],
                'risk_alert' => 'Secondary attrition of top-tier performers due to organizational anxiety.'
            ],
            'operator_opinion' => [
                'quote' => 'Do not cut muscle while trying to trim fat. Document every mission-critical process before restructuring.',
                'analysis' => 'Operational continuity is vulnerable during downsizing or budget reallocations. You must identify all single points of failure (knowledge silos, sole code owners, dedicated customer account reps) before eliminating roles. Simplify your roadmap by killing bottom 30% low-velocity projects and refocusing all bandwidth on the top 2 revenue-generating product workflows.',
                'recommendations' => [
                    'Map critical customer SLAs to ensure customer churn remains under 2% during transitions.',
                    'Consolidate tooling and eliminate redundant software licenses across the tech stack.',
                    'Re-establish weekly sprint velocity metrics with tightened definition-of-done criteria.'
                ],
                'risk_alert' => 'Broken customer escalation paths causing account churn during restructuring.'
            ],
            'devil_opinion' => [
                'quote' => 'You assume cutting 20% will solve the gap, but declining revenue will outpace your reduced expenses.',
                'analysis' => 'The primary fallacy in your plan is assuming that downsizing will leave top-line revenue untouched. Layoffs invariably disrupt sales momentum and support responsiveness, frequently causing a 10-15% secondary revenue drop. Moreover, if your underlying business model lacks pricing power, restructuring merely postpones failure by 90 days. You must test whether price increases on high-intent accounts can close the delta.',
                'recommendations' => [
                    'Model a scenario where restructuring leads to an immediate 12% churn in enterprise pipeline.',
                    'Test a 25% price increase on new inbound cohorts before concluding that layoffs are the sole lever.',
                    'Establish a hard 45-day deadline: if gross margins do not expand by 8%, pivot to strategic M&A exploration.'
                ],
                'risk_alert' => 'Unaddressed core unit-economic negative margins continuing post-restructuring.'
            ],
            'action_plan' => [
                ['timeline' => 'Days 1-5 (Audit & Pre-Planning)', 'owner' => 'CEO & Finance Lead', 'action' => 'Finalize 18-20% OPEX reduction target, lock severance packages, and identify key retained talent.', 'milestone' => 'Restructuring roster verified with zero single-point-of-failure exposure.'],
                ['timeline' => 'Days 6-10 (Execution & Clarity)', 'owner' => 'CEO & Leadership', 'action' => 'Execute transition in a single morning, followed by transparent all-hands and 1-on-1 key stakeholder re-commitments.', 'milestone' => 'All departing severance processed; core team retainers signed.'],
                ['timeline' => 'Days 11-20 (Operational Streamlining)', 'owner' => 'COO / Head of Product', 'action' => 'Deprecate 2 non-core product initiatives, renegotiate top 5 vendor contracts, and adjust sprint capacity.', 'milestone' => 'Monthly burn reduced by targeted € target; sprint focus restored.'],
                ['timeline' => 'Days 21-30 (Revenue & Board Review)', 'owner' => 'CEO & Revenue Team', 'action' => 'Deploy high-intent customer expansion campaign and present revised 18-month runway model to investors.', 'milestone' => 'Runway officially extended by 8+ months; gross margin baseline stabilized.']
            ]
        ]);
    }
}
