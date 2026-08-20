import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    Building2, 
    ShieldCheck, 
    Scale, 
    Users, 
    Sparkles, 
    Clock, 
    Mail, 
    MapPin, 
    CheckCircle2, 
    ArrowRight,
    Lock
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function About() {
    const { company, auth } = usePage().props;

    const companyName = company?.name || 'CHANGE IT UP SERVICES LTD';
    const companyNumber = company?.number || '16107295';
    const companyAddress = company?.address || '14 Broadway, Nottingham, United Kingdom, NG1 1PS';
    const supportEmail = company?.email || 'support@fitninja.co.uk';
    const supportSla = company?.sla || '24-48 hours';

    return (
        <ExecutiveLayout>
            <Head title="About Us — Macix AI (CHANGE IT UP SERVICES LTD)" />

            <div className="max-w-6xl mx-auto space-y-12 my-6">
                
                {/* Header */}
                <div className="border-b border-slate-800 pb-6">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>Corporate Profile &amp; Governance</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        About Macix AI
                    </h1>
                    <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                        Empowering executives, founders, and boards with high-velocity, multi-perspective strategic simulations and authoritative decision synthesis.
                    </p>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Our Mission
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Eliminating Cognitive Blind Spots in Critical Corporate Decisions
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Every founder and C-suite executive eventually faces high-stakes dilemmas: navigating catastrophic runway cliffs, restructuring core leadership, executing down-round bridge financing, or confronting co-founder litigation.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Traditional advisory boards meet infrequently and often avoid confrontational truths. <strong>Macix AI</strong> changes that by orchestrating simultaneous multi-avatar AI deliberations that stress-test your dilemmas with brutal honesty, empathetic realism, operational precision, and adversarial risk audits.
                        </p>
                    </div>

                    <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-4">
                        <div className="flex items-center gap-3 text-amber-400 font-bold text-sm">
                            <Sparkles className="w-5 h-5" />
                            <span>Executive Pillars of Macix AI</span>
                        </div>

                        <div className="space-y-3 pt-2">
                            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold text-white">Multi-Persona Reasoning</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Concurrently models investor, mentor, operator, and devil's advocate perspectives.</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold text-white">Objective Action Roadmaps</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Generates quantified 30-day prioritized execution plans, not generic high-level summaries.</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold text-white">Enterprise Privacy &amp; Zero Retention</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Proprietary briefs are isolated in ephemeral memory and never used for public AI training.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Corporate Entity Card */}
                <div className="p-8 bg-gradient-to-br from-[#0c1220] via-[#111728] to-[#0c1220] border border-amber-500/30 rounded-3xl shadow-2xl space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">Operating Corporate Entity &amp; Invoicing Authority</h3>
                                <p className="text-xs text-slate-400">Merchant of record and legal data controller under UK jurisdiction</p>
                            </div>
                        </div>

                        <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-amber-400 border border-slate-800">
                            UK Co. No. {companyNumber}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Company Name</span>
                            <span className="font-extrabold text-white text-sm">{companyName}</span>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Registered Office</span>
                            <div className="flex items-start gap-1 text-slate-300">
                                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                                <span>{companyAddress}</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Support Desk</span>
                            <a href={`mailto:${supportEmail}`} className="text-amber-400 hover:underline font-mono font-semibold flex items-center gap-1">
                                <Mail className="w-3.5 h-3.5" />
                                <span>{supportEmail}</span>
                            </a>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Service SLA Target</span>
                            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{supportSla} Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Bar */}
                <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                        <h4 className="text-base font-bold text-white">Ready to Convene Your First Boardroom Briefing?</h4>
                        <p className="text-xs text-slate-400">
                            Experience simultaneous 4-persona deliberation and export official board minutes in minutes.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/contact"
                            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-semibold transition-colors"
                        >
                            Contact Desk
                        </Link>

                        <Link
                            href={auth?.user ? "/board/new" : "/register"}
                            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                        >
                            <span>Convene Your Board</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </ExecutiveLayout>
    );
}
