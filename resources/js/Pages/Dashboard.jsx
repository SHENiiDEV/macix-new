import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import { 
    Sparkles, 
    CreditCard, 
    History, 
    FileText, 
    ArrowRight, 
    Plus, 
    Building2, 
    ShieldCheck, 
    Download,
    TrendingUp,
    AlertCircle,
    ChevronRight,
    Users
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';
import TopUpModal from '../Components/TopUpModal';

export default function Dashboard({ auth, recentSessions, stats }) {
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    return (
        <ExecutiveLayout>
            <Head title="Executive Dashboard — Macix AI" />

            <div className="space-y-8">
                
                {/* Executive Welcome Hero Banner */}
                <div className="relative rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#11192e] to-[#0d1322] border border-slate-800 p-8 overflow-hidden shadow-2xl">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>Executive Boardroom Active</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Welcome, {auth.user.name}
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                                {auth.user.company_name ? `Operating for ${auth.user.company_name}. ` : ''}
                                Your virtual Board of Advisors is standing by for strategic deliberation.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <button
                                onClick={() => setIsTopUpOpen(true)}
                                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-200 transition-all flex items-center gap-2 cursor-pointer"
                            >
                                <CreditCard className="w-4 h-4 text-sky-400" />
                                <span>Add Funds (€{Number(auth.user.wallet_balance).toFixed(2)})</span>
                            </button>

                            <Link
                                href="/board/new"
                                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 rounded-xl text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Convene New Board</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Metric Cockpit Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    
                    {/* Wallet Balance Card */}
                    <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prepaid Wallet</span>
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                                <CreditCard className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="text-3xl font-extrabold text-white font-mono">
                                €{Number(stats.wallet_balance).toFixed(2)}
                            </div>
                            <span className="text-[11px] text-slate-400">B2B Prepaid Balance</span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                            <Link href="/billing" className="text-amber-400 hover:underline flex items-center gap-1 font-semibold">
                                <span>View Invoices</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                            <button 
                                onClick={() => setIsTopUpOpen(true)}
                                className="text-slate-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5 text-amber-400" />
                                <span>Top Up</span>
                            </button>
                        </div>
                    </div>

                    {/* Total Deliberations */}
                    <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Board Sessions</span>
                            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                                <Users className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="text-3xl font-extrabold text-white font-mono">
                                {stats.total_sessions}
                            </div>
                            <span className="text-[11px] text-slate-400">Total Deliberations Conducted</span>
                        </div>
                        <div className="pt-3 border-t border-slate-800/80 text-xs">
                            <Link href="/board/history" className="text-sky-400 hover:underline flex items-center gap-1 font-semibold">
                                <span>Browse Session Archive</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Latest Alignment */}
                    <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Latest Consensus</span>
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                                {stats.latest_consensus ? `${stats.latest_consensus}%` : 'N/A'}
                            </div>
                            <span className="text-[11px] text-slate-400 truncate block">
                                {stats.latest_verdict || 'Awaiting first session'}
                            </span>
                        </div>
                        <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                            <span>Executive Multi-Avatar AI Engine</span>
                        </div>
                    </div>

                </div>

                {/* Quick Start Board Session CTA Bar */}
                <div className="bg-[#0c1220] border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white">Facing a Critical Strategic Dilemma?</h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Run your situation through the Ruthless Investor, Empathic Mentor, Pragmatic Operator, and Devil's Advocate.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/board/new"
                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 shrink-0"
                    >
                        <span>Start New Briefing</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Recent Board Sessions List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                            <History className="w-4 h-4 text-amber-400" />
                            <span>Recent Board Resolutions</span>
                        </h2>
                        <Link href="/board/history" className="text-xs text-amber-400 hover:underline font-semibold flex items-center gap-1">
                            <span>View All</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {recentSessions && recentSessions.length > 0 ? (
                        <div className="space-y-3">
                            {recentSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="bg-[#0b101c] border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg"
                                >
                                    <div className="space-y-1.5 flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                                {session.tier} Board (€{Number(session.cost_eur).toFixed(0)})
                                            </span>
                                            <span className="text-xs text-slate-500 font-mono">
                                                {new Date(session.created_at).toLocaleDateString()} &bull; {new Date(session.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-bold text-white truncate">
                                            {session.title || 'Strategic Board Dilemma'}
                                        </h3>
                                        <p className="text-xs text-slate-400 line-clamp-1">
                                            {session.brief_text}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2.5 shrink-0">
                                        <a
                                            href={`/board/${session.id}/export-minutes`}
                                            className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                                            title="Export Official PDF Minutes"
                                        >
                                            <Download className="w-3.5 h-3.5 text-amber-400" />
                                            <span>PDF Minutes</span>
                                        </a>

                                        <Link
                                            href={`/board/${session.id}/resolution`}
                                            className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-xs font-bold text-amber-300 transition-colors flex items-center gap-1.5"
                                        >
                                            <span>Open Resolution</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-[#0b101c] border border-slate-800/80 rounded-2xl p-10 text-center space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
                                <Sparkles className="w-6 h-6 text-amber-400" />
                            </div>
                            <div className="max-w-md mx-auto">
                                <h4 className="text-sm font-bold text-white">No Board Sessions Convened Yet</h4>
                                <p className="text-xs text-slate-400 mt-1">
                                    Describe your current founder or corporate dilemma to convene your 4 AI advisors and generate your first resolution report.
                                </p>
                            </div>
                            <Link
                                href="/board/new"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all"
                            >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                                <span>Convene Your First Board Meeting</span>
                            </Link>
                        </div>
                    )}
                </div>

            </div>

            {/* TopUp Modal */}
            <TopUpModal 
                isOpen={isTopUpOpen} 
                onClose={() => setIsTopUpOpen(false)} 
                defaultAmount={499}
            />
        </ExecutiveLayout>
    );
}
