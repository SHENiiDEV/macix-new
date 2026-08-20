import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    Sparkles, 
    Zap, 
    Users, 
    BrainCircuit, 
    FileText, 
    ArrowRight, 
    ShieldCheck, 
    CheckCircle2, 
    LayoutDashboard,
    CreditCard,
    Building2,
    Lock
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function HowItWorks() {
    const { company, auth } = usePage().props;
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            num: "01",
            badge: "Instant Provisioning",
            title: "Executive Account Setup & Wallet Provisioning",
            desc: "Register in under 60 seconds with verified corporate credentials. Fund your prepaid B2B wallet with immediate clearance across EUR (€), USD ($), or GBP (£) with zero recurring traps.",
            highlights: [
                "Instant wallet credit clearance",
                "UK B2B reverse charge VAT compliance",
                "Full 14-day refund guarantee for unused balances",
                "Zero surprise subscription charges"
            ],
            icon: CreditCard,
            color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
        },
        {
            num: "02",
            badge: "Multi-Avatar Deliberation",
            title: "Simultaneous 4-Avatar Strategic Analysis (< 1.2s)",
            desc: "Submit your dilemma — whether cash runway bottlenecks, co-founder disputes, down-round offers, or organizational restructuring. Four specialized personas analyze your submission concurrently.",
            highlights: [
                "The Ruthless Investor: Unit economics & capital preservation",
                "The Empathic Mentor: Founder stamina & culture protection",
                "The Pragmatic Operator: Bottleneck diagnosis & execution",
                "The Devil's Advocate: Cognitive bias & blind-spot stress testing"
            ],
            icon: Users,
            color: "text-sky-400 border-sky-500/30 bg-sky-500/10"
        },
        {
            num: "03",
            badge: "Chairman Synthesis",
            title: "Synthesized Verdict & 30-Day Action Roadmap",
            desc: "The Chairman of the Board evaluates competing advisor arguments, calculates an objective risk index, and synthesizes an authoritative executive verdict with milestone timelines.",
            highlights: [
                "Quantified Risk Assessment (Low, Moderate, High, Critical)",
                "Clear, non-hedging strategic consensus",
                "Prioritized 30-Day Milestone Execution Plan",
                "Fiduciary responsibility isolation"
            ],
            icon: BrainCircuit,
            color: "text-purple-400 border-purple-500/30 bg-purple-500/10"
        },
        {
            num: "04",
            badge: "Executive Dashboards & Invoices",
            title: "Official Board Minutes & UK B2B PDF Invoices",
            desc: "Download official, boardroom-ready PDF Meeting Minutes for stakeholders or co-founders, alongside official UK VAT Invoices issued by CHANGE IT UP SERVICES LTD.",
            highlights: [
                "Official downloadable PDF Board Minutes",
                "UK VAT Invoices bearing PAID & VERIFIED stamps",
                "Archived permanent historical records in your Dashboard",
                "Zero data-training confidentiality guarantee"
            ],
            icon: FileText,
            color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
        }
    ];

    const current = steps[activeStep];
    const IconComponent = current.icon;

    return (
        <ExecutiveLayout>
            <Head title="How It Works — Step-by-Step Strategic Architecture — Macix AI" />

            <div className="max-w-6xl mx-auto space-y-12 my-6">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        <Zap className="w-3.5 h-3.5" />
                        <span>High-Speed Decision Architecture</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        How Macix AI Orchestrates Your Virtual Boardroom
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        A rigorous 4-step workflow transforming complex corporate dilemmas into synthesized strategic clarity, actionable 30-day roadmaps, and official documentation.
                    </p>
                </div>

                {/* Step Selector Pills */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {steps.map((step, idx) => {
                        const isSelected = activeStep === idx;
                        const StepIcon = step.icon;
                        return (
                            <button
                                key={step.num}
                                onClick={() => setActiveStep(idx)}
                                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                                    isSelected 
                                        ? 'bg-gradient-to-b from-[#11192e] to-[#0c1220] border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]' 
                                        : 'bg-[#0b101c] border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono font-black text-xs text-amber-400">
                                        STEP {step.num}
                                    </span>
                                    <StepIcon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                                </div>
                                <span className="text-xs font-bold text-white line-clamp-1">
                                    {step.badge}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Step Feature Box */}
                <div className="bg-gradient-to-br from-[#0c1220] via-[#111728] to-[#0c1220] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-lg text-xs font-mono font-extrabold bg-amber-500 text-slate-950">
                                    PHASE {current.num}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    {current.badge}
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                {current.title}
                            </h2>

                            <p className="text-sm text-slate-300 leading-relaxed">
                                {current.desc}
                            </p>

                            <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                                {current.highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 flex items-center gap-4">
                                <Link
                                    href={auth?.user ? "/board/new" : "/register"}
                                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                                >
                                    <span>{auth?.user ? "Convene Board Session" : "Start Free Setup"}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                {activeStep < steps.length - 1 && (
                                    <button
                                        onClick={() => setActiveStep(activeStep + 1)}
                                        className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-colors"
                                    >
                                        Next Step &rarr;
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Right Decorative Graphic Card */}
                        <div className="lg:col-span-5 bg-[#07090e] border border-slate-800/80 rounded-2xl p-6 shadow-inner space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                <span className="text-[11px] font-mono text-slate-400 uppercase">Architecture Telemetry</span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${current.color}`}>
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">{current.badge}</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Execution latency: &lt; 1.2s</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 space-y-2 text-[11px] font-mono text-slate-400">
                                <div>&gt; Corporate Entity: {company?.name || 'CHANGE IT UP SERVICES LTD'}</div>
                                <div>&gt; Company Number: {company?.number || '16107295'}</div>
                                <div>&gt; Zero Model Training: VERIFIED (Strict Isolation)</div>
                                <div>&gt; Resolution Export: DOMPDF &bull; PDF/A-1</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Trust Guarantee */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>14-Day Refund Right</span>
                        </div>
                        <p className="text-xs text-slate-400">
                            Unused prepaid wallet balances can be refunded 100% within 14 calendar days upon request.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                            <Lock className="w-4 h-4" />
                            <span>Zero Data Retention</span>
                        </div>
                        <p className="text-xs text-slate-400">
                            Proprietary financials and briefs are never used to train public or commercial AI models.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                            <Building2 className="w-4 h-4" />
                            <span>Official UK VAT Invoices</span>
                        </div>
                        <p className="text-xs text-slate-400">
                            UK B2B Reverse Charge tax invoices automatically generated and attached to all transactions.
                        </p>
                    </div>
                </div>

            </div>
        </ExecutiveLayout>
    );
}
