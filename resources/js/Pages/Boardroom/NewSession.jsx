import React, { useState } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { 
    Sparkles, 
    Briefcase, 
    Heart, 
    Cpu, 
    Flame, 
    Crown, 
    AlertCircle, 
    Plus, 
    CheckCircle2, 
    HelpCircle, 
    CreditCard, 
    Building2, 
    ArrowRight,
    Zap,
    Lock
} from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';
import TopUpModal from '../../Components/TopUpModal';
import { useCurrency } from '../../Context/CurrencyContext';

export default function NewSession({ initialTier = 'starter', walletBalance = 0 }) {
    const { formatPrice } = useCurrency();
    const [selectedTier, setSelectedTier] = useState(initialTier);
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);
    const [customAdvisor1, setCustomAdvisor1] = useState('M&A & Restructuring Specialist');
    const [customAdvisor2, setCustomAdvisor2] = useState('B2B Enterprise Growth CMO');

    const tierCosts = {
        starter: 559,
        pro: 1799,
        enterprise: 5999,
    };

    const currentCost = tierCosts[selectedTier] || 559;
    const isBalanceSufficient = walletBalance >= currentCost;

    const { data, setData, post, processing, errors } = useForm({
        tier: initialTier,
        title: '',
        brief_text: '',
        company_context: '',
        custom_advisors: [],
    });

    const sampleDilemmas = [
        {
            label: 'Cash Runway & 20% Layoffs',
            title: 'Critical Runway Crunch: 20% Team Layoff vs Bridging Risk',
            brief: 'We have 4.5 months of cash runway remaining at current burn. Our revenue growth stalled this quarter from 15% MoM to 2% MoM. To reach default-alive status, we need to cut 20% of headcount (8 engineers and 2 SDRs), but our lead architects warn this will destroy product velocity and shatter morale. Should we execute a fast, ruthless layoff now or pursue an aggressive bridge round at a 30% valuation haircut?',
            context: 'MRR: €65,000 | Monthly Burn: €48,000 | Runway: 4.5 months | Team Size: 28 FTEs | Prior Funding: €1.5M Seed',
        },
        {
            label: 'Enterprise Pivot vs Self-Serve',
            title: 'Pivot Dilemma: Abandon PLG Self-Serve for Top 3 Enterprise Contracts',
            brief: 'Three Fortune 500 prospects have requested on-premise deployments and custom security certifications worth €450k ARR combined. However, servicing them requires diverting 80% of engineering bandwidth away from our scalable self-serve SaaS roadmap for the next two quarters. Are we sacrificing our long-term product valuation for short-term enterprise cash flow?',
            context: 'ARR: €320,000 | Active Self-Serve Accounts: 1,400 | Runway: 9 months | Team Size: 14 FTEs',
        },
        {
            label: 'Co-Founder Conflict & Equity',
            title: 'Co-Founder Performance Separation & Vesting Dispute',
            brief: 'My technical co-founder has become disengaged over the last 6 months, blocking key hiring decisions and missing critical infrastructure milestones. They hold 35% equity with an informal 4-year vesting schedule that was never legally documented with a cliff. How do I initiate a separation without stalling ongoing investor due diligence or sparking legal retaliation?',
            context: 'Stage: Post-Seed | Team Size: 11 FTEs | Cap Table: Founder 55%, Co-founder 35%, Option Pool 10%',
        },
    ];

    const applySample = (sample) => {
        setData({
            ...data,
            title: sample.title,
            brief_text: sample.brief,
            company_context: sample.context,
        });
    };

    const handleTierChange = (tier) => {
        setSelectedTier(tier);
        setData('tier', tier);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Attach custom personas if Pro or Enterprise
        let customList = [];
        if (selectedTier === 'pro' || selectedTier === 'enterprise') {
            customList = [customAdvisor1, customAdvisor2].filter(Boolean);
        }

        data.custom_advisors = customList;

        post('/board/convene', {
            preserveScroll: true,
            onError: (err) => {
                if (err.insufficient_funds) {
                    setIsTopUpOpen(true);
                }
            },
        });
    };

    return (
        <ExecutiveLayout>
            <Head title="Convene the Board of Advisors — Macix AI" />

            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Executive Boardroom Briefing</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Convene Your Board of AI Advisors
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">
                            Formulate your dilemma. The system will orchestrate multi-avatar deliberation and synthesize a 30-day Action Plan.
                        </p>
                    </div>

                    {/* Current Wallet Indicator */}
                    <div className="bg-[#0b101d] border border-slate-800 rounded-2xl p-3 px-4 flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <CreditCard className="w-4.5 h-4.5" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Wallet Balance</div>
                            <div className="text-sm font-extrabold text-white font-mono">
                                {formatPrice(walletBalance, 2)}
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Step 1: Tier Selection */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                1. Select Board Deliberation Tier
                            </label>
                            <span className="text-xs text-amber-400 font-medium">B2B Fixed-Fee Clearance</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Starter */}
                            <div
                                onClick={() => handleTierChange('starter')}
                                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                                    selectedTier === 'starter'
                                        ? 'bg-amber-500/10 border-amber-500 shadow-xl shadow-amber-500/10 text-white'
                                        : 'bg-[#0b101c] border-slate-800 hover:border-slate-700 text-slate-300'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-sm font-bold text-white">Starter Board</span>
                                    <span className="text-base font-extrabold text-amber-400 font-mono">{formatPrice(559)}</span>
                                </div>
                                <p className="text-[11px] text-slate-400 mt-2">
                                    Single strategic dilemma analyzed by the standard 4-advisor board + PDF Board Minutes.
                                </p>
                            </div>

                            {/* Pro */}
                            <div
                                onClick={() => handleTierChange('pro')}
                                className={`p-5 rounded-2xl border cursor-pointer transition-all relative ${
                                    selectedTier === 'pro'
                                        ? 'bg-amber-500/10 border-amber-500 shadow-xl shadow-amber-500/10 text-white'
                                        : 'bg-[#0b101c] border-slate-800 hover:border-slate-700 text-slate-300'
                                }`}
                            >
                                <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-[9px] uppercase tracking-wider rounded">
                                    Recommended
                                </div>
                                <div className="flex justify-between items-start">
                                    <span className="text-sm font-bold text-white">Pro Board</span>
                                    <span className="text-base font-extrabold text-amber-400 font-mono">{formatPrice(1799)}</span>
                                </div>
                                <p className="text-[11px] text-slate-400 mt-2">
                                    2 custom advisor personas + deep fiduciary stress-testing + 30-Day Action Roadmap.
                                </p>
                            </div>

                            {/* Enterprise */}
                            <div
                                onClick={() => handleTierChange('enterprise')}
                                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                                    selectedTier === 'enterprise'
                                        ? 'bg-amber-500/10 border-amber-500 shadow-xl shadow-amber-500/10 text-white'
                                        : 'bg-[#0b101c] border-slate-800 hover:border-slate-700 text-slate-300'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-sm font-bold text-white">Enterprise Retainer</span>
                                    <span className="text-base font-extrabold text-amber-400 font-mono">{formatPrice(5999)}</span>
                                </div>
                                <p className="text-[11px] text-slate-400 mt-2">
                                    10 sessions / month + persistent decision history & financial statement ingestion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Custom Advisor Personas (for Pro & Enterprise) */}
                    {(selectedTier === 'pro' || selectedTier === 'enterprise') && (
                        <div className="p-5 bg-slate-900/60 border border-amber-500/30 rounded-2xl space-y-4 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <Crown className="w-4 h-4 text-amber-400" />
                                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                                    Pro Custom Advisor Personalization
                                </h3>
                            </div>
                            <p className="text-xs text-slate-400">
                                Configure specialized background expertise to inject domain knowledge into the deliberation.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="text-[11px] text-slate-400 block mb-1">Custom Advisor 1 Focus</label>
                                    <input
                                        type="text"
                                        value={customAdvisor1}
                                        onChange={(e) => setCustomAdvisor1(e.target.value)}
                                        placeholder="e.g. M&A and Restructuring Specialist"
                                        className="w-full px-3.5 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500 font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="text-[11px] text-slate-400 block mb-1">Custom Advisor 2 Focus</label>
                                    <input
                                        type="text"
                                        value={customAdvisor2}
                                        onChange={(e) => setCustomAdvisor2(e.target.value)}
                                        placeholder="e.g. Enterprise B2B Growth Lead"
                                        className="w-full px-3.5 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500 font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sample Dilemma Starters */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Quick Fill Executive Presets:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {sampleDilemmas.map((sample, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => applySample(sample)}
                                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-xs text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                                >
                                    <Zap className="w-3 h-3 text-amber-400" />
                                    <span>{sample.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 3: Brief Details */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                                2. Strategic Dilemma Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="e.g. Critical Cash Runway Crunch: 20% Team Layoff vs Down-Round Bridge"
                                className="w-full px-4 py-3 bg-[#0b101c] border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-semibold"
                            />
                            {errors.title && <p className="text-xs text-rose-400 mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                                3. Comprehensive Situation & Dilemma Description
                            </label>
                            <textarea
                                rows={6}
                                value={data.brief_text}
                                onChange={(e) => setData('brief_text', e.target.value)}
                                placeholder="Describe the background, trade-offs, conflicting priorities, and emotional/financial stakes. Be candid — data is strictly isolated and never used to train public models."
                                className="w-full p-4 bg-[#0b101c] border border-slate-800 rounded-xl text-white text-xs leading-relaxed focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                            ></textarea>
                            {errors.brief_text && <p className="text-xs text-rose-400 mt-1">{errors.brief_text}</p>}
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                                4. Financial & Company Baseline Context (Optional)
                            </label>
                            <input
                                type="text"
                                value={data.company_context}
                                onChange={(e) => setData('company_context', e.target.value)}
                                placeholder="e.g. MRR: €80k | Monthly Burn: €55k | Cash Runway: 5 months | Team Size: 22 FTEs"
                                className="w-full px-4 py-2.5 bg-[#0b101c] border border-slate-800 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-amber-500"
                            />
                        </div>
                    </div>

                    {/* Insufficient Funds Alert if needed */}
                    {!isBalanceSufficient && (
                        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                                <div className="text-xs text-slate-300">
                                    <span className="font-bold text-white">Wallet Top-Up Required: </span>
                                    Current balance is <strong>€{Number(walletBalance).toFixed(2)}</strong>. You need <strong>€{currentCost.toFixed(2)}</strong> for {selectedTier.toUpperCase()} tier.
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsTopUpOpen(true)}
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 flex items-center gap-1.5 cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                                <span>Add €{Math.max(0, currentCost - walletBalance).toFixed(0)} to Wallet</span>
                            </button>
                        </div>
                    )}

                    {/* Convene Button */}
                    <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-slate-400 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-emerald-400" />
                            <span>UK GDPR Encrypted &bull; Instant Deduction &bull; Reverse Charge 0%</span>
                        </div>

                        {isBalanceSufficient ? (
                            <button
                                type="submit"
                                disabled={processing || !data.brief_text}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm rounded-xl shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {processing ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                                        <span>Convening The Board of Advisors...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Crown className="w-4 h-4" />
                                        <span>Pay {formatPrice(currentCost)} &amp; Convene Board</span>
                                    </div>
                                )}
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsTopUpOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CreditCard className="w-4 h-4" />
                                <span>Top Up Wallet to Convene ({formatPrice(currentCost)})</span>
                            </button>
                        )}
                    </div>

                </form>

            </div>

            {/* TopUp Modal */}
            <TopUpModal 
                isOpen={isTopUpOpen} 
                onClose={() => setIsTopUpOpen(false)} 
                defaultAmount={Math.max(149, currentCost)} 
            />
        </ExecutiveLayout>
    );
}
