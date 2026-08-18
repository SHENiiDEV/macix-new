import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { History, Download, Sparkles, ArrowRight, Plus, Users, Calendar } from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';

export default function SessionHistory({ sessions }) {
    const sessionList = sessions?.data || [];

    return (
        <ExecutiveLayout>
            <Head title="Board Minutes Archive — Macix AI" />

            <div className="space-y-8 max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <History className="w-3.5 h-3.5" />
                            <span>Executive Records</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Board Minutes &amp; Deliberation Archive
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">
                            Access past board resolutions, strategic verdicts, and stamped governance reports.
                        </p>
                    </div>

                    <Link
                        href="/board/new"
                        className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 shrink-0"
                    >
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Convene New Board</span>
                    </Link>
                </div>

                {/* Session Table */}
                {sessionList.length > 0 ? (
                    <div className="space-y-4">
                        {sessionList.map((session) => (
                            <div
                                key={session.id}
                                className="bg-[#0b101c] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="space-y-2 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                            {session.tier} Board (€{Number(session.cost_eur).toFixed(0)})
                                        </span>
                                        <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(session.created_at).toLocaleDateString()} &bull; {new Date(session.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC
                                        </span>
                                        {session.resolution && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                {session.resolution.consensus_score}% Consensus
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-base font-bold text-white truncate">
                                        {session.title || 'Strategic Boardroom Session'}
                                    </h3>

                                    {session.resolution?.strategic_verdict && (
                                        <p className="text-xs text-amber-300 font-medium">
                                            <strong>Verdict:</strong> {session.resolution.strategic_verdict}
                                        </p>
                                    )}

                                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                        {session.brief_text}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                    <a
                                        href={`/board/${session.id}/export-minutes`}
                                        className="px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                                    >
                                        <Download className="w-3.5 h-3.5 text-amber-400" />
                                        <span>PDF Minutes</span>
                                    </a>

                                    <Link
                                        href={`/board/${session.id}/resolution`}
                                        className="px-4 py-2.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 rounded-xl text-xs font-extrabold text-amber-300 transition-colors flex items-center gap-1.5"
                                    >
                                        <span>View Resolution</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
                            <History className="w-7 h-7 text-amber-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">No Deliberations Recorded</h3>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                            Your past board minutes and advisor recommendations will be archived here for reference.
                        </p>
                        <Link
                            href="/board/new"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20"
                        >
                            <Plus className="w-4 h-4 stroke-[3]" />
                            <span>Start First Session</span>
                        </Link>
                    </div>
                )}

            </div>
        </ExecutiveLayout>
    );
}
