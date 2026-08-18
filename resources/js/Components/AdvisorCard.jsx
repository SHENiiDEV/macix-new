import React from 'react';
import { Briefcase, Heart, Cpu, Flame, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AdvisorCard({ type, data }) {
    if (!data) return null;

    const configs = {
        investor: {
            title: 'The Ruthless Investor',
            subtitle: 'ROI, Capital Preservation & Runway Discipline',
            icon: Briefcase,
            accent: 'sky',
            border: 'border-sky-500/30 hover:border-sky-400/60',
            glow: 'hover:shadow-sky-500/10',
            bgBadge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
            quoteBorder: 'border-sky-500',
        },
        mentor: {
            title: 'The Empathic Mentor',
            subtitle: 'Culture, Founder Resilience & Team Cohesion',
            icon: Heart,
            accent: 'emerald',
            border: 'border-emerald-500/30 hover:border-emerald-400/60',
            glow: 'hover:shadow-emerald-500/10',
            bgBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            quoteBorder: 'border-emerald-500',
        },
        operator: {
            title: 'The Pragmatic Operator',
            subtitle: 'Execution Velocity, SLAs & Scalable Systems',
            icon: Cpu,
            accent: 'amber',
            border: 'border-amber-500/30 hover:border-amber-400/60',
            glow: 'hover:shadow-amber-500/10',
            bgBadge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            quoteBorder: 'border-amber-500',
        },
        devil: {
            title: "The Devil's Advocate",
            subtitle: 'Stress-Testing, Blindspots & Downside Protection',
            icon: Flame,
            accent: 'rose',
            border: 'border-rose-500/30 hover:border-rose-400/60',
            glow: 'hover:shadow-rose-500/10',
            bgBadge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
            quoteBorder: 'border-rose-500',
        },
    };

    const config = configs[type] || configs.investor;
    const IconComponent = config.icon;

    return (
        <div className={`flex flex-col bg-[#0b101c] border ${config.border} rounded-2xl p-6 transition-all duration-300 shadow-xl ${config.glow}`}>
            
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${config.bgBadge}`}>
                        <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-white tracking-tight">{config.title}</h4>
                        <p className="text-[11px] text-slate-400">{config.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Pull Quote */}
            {data.quote && (
                <div className={`p-3 bg-slate-900/80 border-l-2 ${config.quoteBorder} rounded-r-lg mb-4 text-xs italic text-slate-300`}>
                    "{data.quote}"
                </div>
            )}

            {/* Analysis Body */}
            <div className="text-xs text-slate-300/90 leading-relaxed mb-5 space-y-2 flex-grow">
                {typeof data.analysis === 'string' ? (
                    data.analysis.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                    ))
                ) : (
                    <p>{JSON.stringify(data.analysis)}</p>
                )}
            </div>

            {/* Recommendations */}
            {data.recommendations && data.recommendations.length > 0 && (
                <div className="space-y-2 mb-4 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Actions:</span>
                    <ul className="space-y-1.5">
                        {data.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-[11px] text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                                <span>{rec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Risk Alert */}
            {data.risk_alert && (
                <div className="mt-auto pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-amber-300/90 bg-amber-500/5 p-2 rounded-lg border border-amber-500/15">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span><strong>Key Risk:</strong> {data.risk_alert}</span>
                </div>
            )}

        </div>
    );
}
