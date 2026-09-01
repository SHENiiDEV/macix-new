import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    HelpCircle, 
    Mail, 
    CreditCard, 
    MessageSquare, 
    ChevronDown, 
    Clock, 
    ShieldCheck, 
    Building2, 
    FileText, 
    Sparkles, 
    ArrowRight,
    Lock,
    Send
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function Support() {
    const { company } = usePage().props;
    const [openFaq, setOpenFaq] = useState(0);

    const companyName = company?.name || 'CHANGE IT UP SERVICES LTD';
    const companyNumber = company?.number || '16107295';
    const supportEmail = company?.email || 'support@fitninja.co.uk';
    const supportSla = company?.sla || '24-48 hours';

    const faqs = [
        {
            q: "How does the Prepaid Executive Wallet work?",
            a: "Macix AI operates on a pre-funded corporate wallet model. You deposit funds (e.g. Starter €559, Pro €1,799, or Enterprise Retainer €5,999) via instant payment clearance. Balance credits are instantly available and debited only when you convene a Boardroom deliberation session."
        },
        {
            q: "What is your 14-Day Refund Guarantee policy?",
            a: "You have a statutory 14-day right to request a full 100% refund on any unspent, positive balance remaining in your Macix AI wallet from the date of the top-up transaction. Completed and conducted board deliberations with generated minutes are digital services delivered upon execution and are non-refundable."
        },
        {
            q: "How do the 4 AI Board Personas deliberate on strategic dilemmas?",
            a: "Our multi-avatar neural engine executes simultaneous parallel reasoning across four complementary executive viewpoints: The Ruthless Investor (fiduciary & capital), The Empathic Mentor (culture & founder stamina), The Pragmatic Operator (execution bottlenecks & KPIs), and The Devil's Advocate (blind spots & risk modeling). The Chairman synthesizes the debate into a coherent 30-Day Action Roadmap."
        },
        {
            q: "How are UK B2B VAT Invoices issued and reverse charge accounted for?",
            a: "All financial transactions automatically generate an official UK Tax Invoice issued by CHANGE IT UP SERVICES LTD (UK Co. No. 16107295). Invoices include 0.00% VAT applied under UK B2B Reverse Charge rules for electronic services, delivered directly to your email and accessible anytime in your Billing history."
        },
        {
            q: "How do I export official Board Minutes in PDF format?",
            a: "Upon completion of any boardroom deliberation, an authoritative PDF report containing executive verdicts, advisor scores, and prioritized 30-day milestones can be downloaded via the 'Export Board Minutes (PDF)' button on the resolution page or from your Dashboard."
        },
        {
            q: "Is our proprietary business data used to train AI models?",
            a: "Never. We enforce a strict Zero-Retention, Zero-Training enterprise guarantee. Your business plans, financial projections, and corporate dilemma submissions are processed in isolated memory and never used to fine-tune public models."
        }
    ];

    return (
        <ExecutiveLayout>
            <Head title="Support & Help Desk — Macix AI" />

            <div className="max-w-6xl mx-auto space-y-12 my-6">
                
                {/* Header Banner */}
                <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                            <HelpCircle className="w-4 h-4" />
                            <span>Executive Help Desk &amp; Knowledge Base</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Support &amp; Help Desk
                        </h1>
                        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                            Instant answers to common operational questions, billing guides, and direct escalation channels with our executive support team.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all shrink-0"
                    >
                        <Send className="w-3.5 h-3.5" />
                        <span>Open Support Ticket</span>
                    </Link>
                </div>

                {/* Support Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Channel 1: Email Support */}
                    <div className="bg-[#0b101c] border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-white">Executive Email Desk</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Direct communication channel for custom advisory inquiries, bespoke onboarding, and enterprise account management.
                            </p>
                            <div className="text-xs font-mono text-amber-400 font-bold break-all">
                                {supportEmail}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-slate-500">SLA: {supportSla}</span>
                            <a
                                href={`mailto:${supportEmail}`}
                                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                            >
                                <span>Send Email</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Channel 2: B2B Invoices */}
                    <div className="bg-[#0b101c] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-white">B2B Tax Invoices &amp; Billing</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Re-download official UK VAT invoices with reverse charge compliance for any past wallet top-up or session deduction.
                            </p>
                            <div className="text-xs text-slate-400">
                                Issued by <strong className="text-slate-200">{companyName}</strong> (Co. {companyNumber})
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-slate-500">Instant PDF</span>
                            <Link
                                href="/billing"
                                className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                            >
                                <span>Go to Billing</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Channel 3: Priority Telemetry & Urgent Triage */}
                    <div className="bg-[#0b101c] border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-white">Priority Ticket Triage</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Submit high-priority requests directly to our tier-1 engineering and executive support desk.
                            </p>
                            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4" />
                                <span>256-bit Encrypted Handling</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-slate-500">Ticket System</span>
                            <Link
                                href="/contact"
                                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                            >
                                <span>Submit Ticket</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* FAQ Accordion Section */}
                <div className="space-y-6">
                    <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-400" />
                                <span>Frequently Asked Questions</span>
                            </h2>
                            <p className="text-xs text-slate-400 mt-1">
                                Everything you need to know about corporate billing, legal compliance, and multi-avatar simulations.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden transition-all"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                                    >
                                        <span className="font-bold text-sm text-white">
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Still Need Assistance CTA Banner */}
                <div className="bg-gradient-to-br from-[#0c1220] via-[#11192e] to-[#0c1220] border-2 border-amber-500/30 rounded-3xl p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-xl font-extrabold text-white">Require Personalized Assistance?</h3>
                        <p className="text-xs text-slate-300 max-w-xl">
                            Our team at <strong>{companyName}</strong> is standing by to assist with enterprise setup, custom personas, or account queries. Target SLA: {supportSla}.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                        <span>Contact Executive Desk</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </ExecutiveLayout>
    );
}
