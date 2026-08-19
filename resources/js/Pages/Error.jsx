import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ShieldAlert, ArrowLeft, Home, RefreshCw, Crown, AlertTriangle, Lock, Wrench } from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function Error({ status = 404, message }) {
    const errorConfigs = {
        404: {
            code: '404',
            title: 'Strategic Route Not Found',
            subtitle: 'Lost in Deliberation',
            description: message || 'The requested boardroom briefing, resolution archive, or session link does not exist or has been securely archived by executive governance.',
            icon: ShieldAlert,
            accent: 'text-amber-400',
            bg: 'bg-amber-500/10 border-amber-500/30',
        },
        403: {
            code: '403',
            title: 'Restricted Boardroom Clearance',
            subtitle: 'Executive Permission Required',
            description: message || 'You do not hold sufficient security clearance or credentials to access this confidential boardroom document or admin console.',
            icon: Lock,
            accent: 'text-rose-400',
            bg: 'bg-rose-500/10 border-rose-500/30',
        },
        500: {
            code: '500',
            title: 'Temporary Clinical Rest & Server Interruption',
            subtitle: 'Boardroom Server Anomaly',
            description: message || 'An unexpected technical anomaly occurred within the deliberation orchestration engine. Our systems engineering desk has been notified.',
            icon: AlertTriangle,
            accent: 'text-rose-400',
            bg: 'bg-rose-500/10 border-rose-500/30',
        },
        503: {
            code: '503',
            title: 'Scheduled System Care & Maintenance',
            subtitle: 'Infrastructure Upgrade in Progress',
            description: message || 'The Macix AI platform is undergoing scheduled architectural optimizations and model upgrades. Full executive access will be restored shortly.',
            icon: Wrench,
            accent: 'text-sky-400',
            bg: 'bg-sky-500/10 border-sky-500/30',
        },
    };

    const config = errorConfigs[status] || errorConfigs[404];
    const IconComponent = config.icon;

    return (
        <ExecutiveLayout>
            <Head title={`${config.code} — ${config.title} | Macix AI`} />

            <div className="max-w-2xl mx-auto my-16 text-center space-y-8">
                
                {/* Error Icon Badge */}
                <div className="relative inline-flex items-center justify-center">
                    <div className="absolute w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className={`w-20 h-20 rounded-3xl ${config.bg} border flex items-center justify-center ${config.accent} shadow-2xl relative z-10`}>
                        <IconComponent className="w-10 h-10 stroke-[2]" />
                    </div>
                </div>

                {/* Status Code & Titles */}
                <div className="space-y-3">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                        HTTP Status {config.code} &bull; {config.subtitle}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {config.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                        {config.description}
                    </p>
                </div>

                {/* Corporate Trust Badge */}
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl max-w-md mx-auto text-[11px] text-slate-400 font-mono">
                    Operating Entity: <strong>DRAYBOND LIMITED</strong> (Company No. 16021806)<br />
                    Desk: <a href="mailto:info@macix.co.uk" className="text-amber-400 hover:underline">info@macix.co.uk</a>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Previous Page</span>
                    </button>

                    <Link
                        href="/"
                        className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 rounded-xl text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        <span>Return to Main Boardroom</span>
                    </Link>
                </div>

            </div>
        </ExecutiveLayout>
    );
}
