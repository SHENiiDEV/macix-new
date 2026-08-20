import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
    Download, 
    Sparkles, 
    Crown, 
    TrendingUp, 
    AlertTriangle, 
    ShieldCheck, 
    Calendar, 
    FileText, 
    CheckCircle2, 
    ArrowLeft,
    Building2,
    Share2,
    Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';
import AdvisorCard from '../../Components/AdvisorCard';
import ActionPlanTable from '../../Components/ActionPlanTable';

export default function Resolution({ session, resolution }) {
    useEffect(() => {
        // Trigger subtle gold confetti on initial load
        try {
            confetti({
                particleCount: 40,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#f59e0b', '#fbbf24', '#0284c7', '#10b981'],
            });
        } catch (e) {
            // Ignore if canvas confetti is unsupported
        }
    }, []);

    const riskColors = {
        LOW: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        MODERATE: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        HIGH: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
        CRITICAL: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    };

    const riskBadgeClass = riskColors[resolution.risk_score] || riskColors.MODERATE;

    return (
        <ExecutiveLayout>
            <Head title={`Board Resolution: ${session.title || 'Executive Session'} — Macix AI`} />

            <div className="space-y-10 max-w-7xl mx-auto">
                
                {/* Top Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard"
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    {session.tier} Board Resolution
                                </span>
                                <span className="text-xs text-slate-500 font-mono">
                                    Session #MCX-{String(session.id).padStart(5, '0')}
                                </span>
                            </div>
                            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                                {session.title || 'Strategic Boardroom Resolution'}
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href={`/wallet/invoice/${session.id}`}
                            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                            title="Download Official VAT Invoice"
                        >
                            <FileText className="w-4 h-4 text-sky-400" />
                            <span>Download Tax Invoice (PDF)</span>
                        </a>

                        <a
                            href={`/board/${session.id}/export-minutes`}
                            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Download className="w-4 h-4 stroke-[2.5]" />
                            <span>Export Board Minutes (PDF)</span>
                        </a>
                    </div>
                </div>

                {/* Strategic Verdict & Executive KPI Deck */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Main Verdict Banner */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-[#0c1220] via-[#11192e] to-[#0c1220] border-2 border-amber-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                                <Crown className="w-4 h-4" />
                                <span>Chairman's Strategic Verdict</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                                {resolution.strategic_verdict}
                            </h2>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                            <div>
                                <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">Deliberation Date</span>
                                <span className="font-mono font-medium text-white">
                                    {new Date(session.created_at).toLocaleDateString()} &bull; {new Date(session.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC
                                </span>
                            </div>
                            <div>
                                <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">Legal Jurisdiction</span>
                                <span className="text-white font-medium">United Kingdom (DRAYBOND LTD)</span>
                            </div>
                        </div>
                    </div>

                    {/* Metric Indicators Card */}
                    <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-xl space-y-5">
                        {/* Consensus Dial */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Board Alignment</span>
                                <span className="text-base font-extrabold text-amber-400 font-mono">{resolution.consensus_score}%</span>
                            </div>
                            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                                <div 
                                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                                    style={{ width: `${resolution.consensus_score}%` }}
                                ></div>
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Cross-avatar agreement score</span>
                        </div>

                        {/* Risk Assessment */}
                        <div className="pt-4 border-t border-slate-800/80">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Risk Exposure Level</span>
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-extrabold tracking-wider uppercase ${riskBadgeClass}`}>
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>{resolution.risk_score} EXPOSURE</span>
                            </div>
                        </div>

                        {/* Fiduciary Notice */}
                        <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Minutes stamped &amp; verified for corporate governance.</span>
                        </div>
                    </div>

                </div>

                {/* Executive Dilemma Briefing Box */}
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5" />
                            <span>1. Executive Dilemma Briefing</span>
                        </h3>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {session.brief_text}
                    </div>
                    {session.company_context && (
                        <div className="pt-3 border-t border-slate-800/60 text-xs font-mono text-amber-300/80 bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
                            <strong>Baseline Context:</strong> {session.company_context}
                        </div>
                    )}
                </div>

                {/* Chairman's Executive Summary */}
                <div className="bg-[#0b101c] border border-amber-500/30 rounded-3xl p-8 shadow-xl space-y-4 relative">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                            <Crown className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-white">2. Chairman's Synthesis &amp; Strategic Summary</h3>
                            <p className="text-xs text-slate-400">Consolidated perspective resolving advisor trade-offs</p>
                        </div>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3 pt-2">
                        {resolution.chairman_summary.split('\n\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>

                {/* 4 Advisor Bento Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                            <Users className="w-4 h-4 text-amber-400" />
                            <span>3. Individual Advisor Positions &amp; Friction Points</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdvisorCard type="investor" data={resolution.investor_opinion} />
                        <AdvisorCard type="mentor" data={resolution.mentor_opinion} />
                        <AdvisorCard type="operator" data={resolution.operator_opinion} />
                        <AdvisorCard type="devil" data={resolution.devil_opinion} />
                    </div>
                </div>

                {/* 30-Day Action Roadmap */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            <span>4. Strategic 30-Day Execution Roadmap</span>
                        </h3>
                    </div>

                    <ActionPlanTable items={resolution.action_plan} />
                </div>

                {/* Export Footer Banner */}
                <div className="bg-[#0c1220] border border-slate-800 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">Need to Share Minutes With Co-Founders or Investors?</h4>
                        <p className="text-xs text-slate-400">
                            Download the official PDF Board Minutes stamped by DRAYBOND LIMITED for your governance archive.
                        </p>
                    </div>
                    <a
                        href={`/board/${session.id}/export-minutes`}
                        className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download Board Minutes (PDF)</span>
                    </a>
                </div>

            </div>
        </ExecutiveLayout>
    );
}
