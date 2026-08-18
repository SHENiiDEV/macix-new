import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import { 
    Sparkles, 
    Briefcase, 
    Heart, 
    Cpu, 
    Flame, 
    Crown, 
    ShieldCheck, 
    ArrowRight, 
    CheckCircle2, 
    FileText, 
    Building2, 
    ChevronRight,
    Users,
    Zap,
    Lock
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function Landing({ auth }) {
    const [selectedTab, setSelectedTab] = useState('investor');

    const advisors = [
        {
            id: 'investor',
            name: 'The Ruthless Investor',
            role: 'Capital Preservation & ROI',
            icon: Briefcase,
            color: 'text-sky-400',
            border: 'border-sky-500/30',
            bg: 'bg-sky-500/10',
            quote: "A company that runs out of cash has zero options. Sentimentality will bankrupt your balance sheet.",
            focus: ['Runway extension & Burn optimization', 'Strict unit economics & Gross margin floors', 'Investor cap table protection'],
        },
        {
            id: 'mentor',
            name: 'The Empathic Mentor',
            role: 'Culture & Founder Mental Health',
            icon: Heart,
            color: 'text-emerald-400',
            border: 'border-emerald-500/30',
            bg: 'bg-emerald-500/10',
            quote: "How you treat people in a crisis dictates whether the surviving team will ever trust your vision again.",
            focus: ['Psychological safety & Leadership stamina', 'Key talent retention & Outplacement ethics', 'Executive burnout prevention'],
        },
        {
            id: 'operator',
            name: 'The Pragmatic Operator',
            role: 'Execution Velocity & Scale',
            icon: Cpu,
            color: 'text-amber-400',
            border: 'border-amber-500/30',
            bg: 'bg-amber-500/10',
            quote: "Strategy without disciplined execution is hallucination. Document the playbook before scaling.",
            focus: ['Process bottlenecks & SLA tracking', 'Roadmap prioritization & Deprecation', 'Engineering & GTM velocity alignment'],
        },
        {
            id: 'devil',
            name: "The Devil's Advocate",
            role: 'Downside Stress-Testing',
            icon: Flame,
            color: 'text-rose-400',
            border: 'border-rose-500/30',
            bg: 'bg-rose-500/10',
            quote: "Every unexamined assumption is an impending crisis. Tell me why this will catastrophically fail.",
            focus: ['Fatal cognitive blindspots', 'Competitor counter-offensives', 'Pre-mortem catastrophic risk modeling'],
        },
    ];

    const tiers = [
        {
            name: 'Starter Board',
            price: 149,
            period: 'per session',
            desc: 'Ideal for resolving a single urgent strategic dilemma with the standard pool of 4 elite advisors.',
            features: [
                'Full 4-Advisor Multi-Perspective Deliberation',
                'Chairman Executive Summary & Synthesis',
                'Interactive Web Resolution Boardroom',
                'Exportable High-Res PDF Board Minutes',
                'Official VAT B2B Invoice from DRAYBOND LTD',
            ],
            cta: 'Convene Starter Board',
            popular: false,
            tierKey: 'starter',
        },
        {
            name: 'Pro Board',
            price: 499,
            period: 'per session',
            desc: 'The most popular high-impact package for founders navigating complex pivots, layoffs, or M&A.',
            features: [
                'All Starter Board Capabilities',
                'Custom Advisor Personas (e.g. M&A Specialist, Growth CMO)',
                'Priority Multi-Perspective Reasoner Orchestration',
                '30-Day Chronological Execution Action Plan',
                'Fiduciary & Cap Table Impact Analysis',
                'Direct PDF & Shareable Boardroom Link',
            ],
            cta: 'Convene Pro Board',
            popular: true,
            tierKey: 'pro',
        },
        {
            name: 'Enterprise Retainer',
            price: 1499,
            period: 'monthly retainer',
            desc: 'Continuous advisory suite with historical session memory and financial statement context ingestion.',
            features: [
                '10 Deliberation Sessions per Month',
                'Full Financial & Cap Table Document Ingestion',
                'Continuous Memory of Past Board Decisions',
                'Dedicated Advisor Customization Workshop',
                'Bespoke Reverse Charge Invoicing & SLA Guarantee',
                'Direct Executive Support via info@macix.co.uk',
            ],
            cta: 'Initiate Enterprise Retainer',
            popular: false,
            tierKey: 'enterprise',
        },
    ];

    const activeAdvisor = advisors.find((a) => a.id === selectedTab) || advisors[0];
    const ActiveIcon = activeAdvisor.icon;

    return (
        <ExecutiveLayout>
            <Head title="Macix AI — Your Personal Board of AI Advisors" />

            {/* Hero Section */}
            <section className="relative pt-12 pb-20 text-center">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-fadeIn">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Executive B2B Decision Intelligence</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
                    Never Make High-Stakes Decisions <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                        In Isolation Again.
                    </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Macix AI provides founders, CEOs, and executive leaders with an on-demand virtual <strong>Board of AI Advisors</strong>. Submit your dilemma, stress-test it against opposing viewpoints, and receive an authoritative Executive Resolution in minutes.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={auth?.user ? "/board/new" : "/register"}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Convene the Board Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="#pricing"
                        className="w-full sm:w-auto px-6 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        <span>View High-Ticket Pricing</span>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                    </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Operated by <strong>DRAYBOND LIMITED</strong> (UK 16021806)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>UK GDPR Compliant &bull; No Training On Data</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-sky-400" />
                        <span>Official VAT Invoicing &bull; Reverse Charge 0%</span>
                    </div>
                </div>
            </section>

            {/* Interactive Boardroom Showcase */}
            <section className="py-16 border-t border-slate-800/80">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Meet Your Virtual Board of Advisors
                    </h2>
                    <p className="text-sm text-slate-400 mt-2">
                        Four polarized viewpoints engineered to challenge confirmation bias, synthesized by the Chairman into an actionable 30-day roadmap.
                    </p>
                </div>

                {/* Advisor Selector Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
                    {advisors.map((advisor) => {
                        const Icon = advisor.icon;
                        const isSelected = selectedTab === advisor.id;
                        return (
                            <button
                                key={advisor.id}
                                onClick={() => setSelectedTab(advisor.id)}
                                className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                                    isSelected
                                        ? `${advisor.bg} ${advisor.border} ${advisor.color} shadow-lg`
                                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{advisor.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Advisor Spotlight Bento Card */}
                <div className="max-w-4xl mx-auto bg-[#0b101c] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-2xl ${activeAdvisor.bg} border ${activeAdvisor.border} flex items-center justify-center ${activeAdvisor.color}`}>
                                    <ActiveIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-extrabold text-white">{activeAdvisor.name}</h3>
                                    <p className="text-xs text-amber-400 font-medium">{activeAdvisor.role}</p>
                                </div>
                            </div>

                            <blockquote className="p-4 bg-slate-900/90 border-l-2 border-amber-500 rounded-r-xl text-sm italic text-slate-200">
                                "{activeAdvisor.quote}"
                            </blockquote>

                            <div className="space-y-2 pt-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Strategic Focus:</span>
                                <ul className="space-y-1.5 text-xs text-slate-300">
                                    {activeAdvisor.focus.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Chairman Synthesis Box */}
                        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center justify-center">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                                <Crown className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-extrabold text-white">The Chairman Synthesis</h4>
                            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                                Balances investor frugality against team morale and operational feasibility to output an authoritative verdict.
                            </p>
                            <div className="mt-4 px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full text-[10px] font-mono font-bold uppercase">
                                30-Day Action Roadmap
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* High-Ticket Pricing Section */}
            <section id="pricing" className="py-20 border-t border-slate-800/80">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        Executive High-Ticket Tiers
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                        Institutional Advisory at a Fraction of Board Costs
                    </h2>
                    <p className="text-sm text-slate-400 mt-3">
                        Pre-paid internal wallet architecture eliminates unpredictable billing and chargebacks. Official UK invoices provided for every transaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                                tier.popular
                                    ? 'bg-[#0d1322] border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 scale-102 z-10'
                                    : 'bg-[#0a0e1a] border border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                                    Most Selected by Founders
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{tier.desc}</p>
                                <div className="mt-5 flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-white">€{tier.price}</span>
                                    <span className="text-xs text-slate-400 font-mono">/ {tier.period}</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included Deliverables:</span>
                                <ul className="space-y-2.5 text-xs text-slate-300">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-amber-400' : 'text-slate-400'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={auth?.user ? `/board/new?tier=${tier.tierKey}` : `/register?tier=${tier.tierKey}`}
                                className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold text-center transition-all flex items-center justify-center gap-2 ${
                                    tier.popular
                                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-lg shadow-amber-500/20'
                                        : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white'
                                }`}
                            >
                                <span>{tier.cta}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Corporate & Legal Entity Verification */}
            <section className="py-12 border-t border-slate-800/80 bg-slate-950/40 rounded-3xl p-8 my-10 max-w-5xl mx-auto border border-slate-800 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-base font-extrabold text-white">Institutional Billing &amp; UK Corporate Entity</h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Operating as <strong>DRAYBOND LIMITED</strong> &bull; Registered Company No. 16021806
                            </p>
                        </div>
                    </div>
                    <div className="text-xs text-slate-400 sm:text-right font-mono">
                        <p>Academy House, 11 Dunraven Place</p>
                        <p>Bridgend, Mid Glamorgan, UK, CF31 1JF</p>
                        <a href="mailto:info@macix.co.uk" className="text-amber-400 hover:underline">info@macix.co.uk</a>
                    </div>
                </div>
            </section>

        </ExecutiveLayout>
    );
}
