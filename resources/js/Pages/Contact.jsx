import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { 
    Mail, 
    Building2, 
    Clock, 
    Send, 
    CheckCircle2, 
    ShieldCheck, 
    MapPin, 
    HelpCircle,
    MessageSquare,
    Sparkles
} from 'lucide-react';
import ExecutiveLayout from '../Layouts/ExecutiveLayout';

export default function Contact() {
    const { company, flash, errors } = usePage().props;

    const { data, setData, post, processing, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const companyName = company?.name || 'CHANGE IT UP SERVICES LTD';
    const companyNumber = company?.number || '16107295';
    const companyAddress = company?.address || '14 Broadway, Nottingham, United Kingdom, NG1 1PS';
    const supportEmail = company?.email || 'support@fitninja.co.uk';
    const supportSla = company?.sla || '24-48 hours';

    return (
        <ExecutiveLayout>
            <Head title="Contact Executive Support & Desk — Macix AI" />

            <div className="max-w-6xl mx-auto space-y-10 my-6">
                
                {/* Header Banner */}
                <div className="border-b border-slate-800 pb-6">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Corporate Communications &amp; Inquiry Desk</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Executive Contact &amp; Support Desk
                    </h1>
                    <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                        Have questions regarding our multi-avatar strategic simulations, bespoke enterprise retainers, or B2B invoicing? Our dedicated support team responds within <strong className="text-amber-400">{supportSla}</strong>.
                    </p>
                </div>

                {/* Success Flash Banner */}
                {(flash?.success || recentlySuccessful) && (
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 animate-fadeIn">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-bold text-emerald-300">Message Dispatched Successfully</h4>
                            <p className="text-xs text-slate-300 mt-0.5">
                                {flash?.success || `Thank you for reaching out. An executive ticket has been registered with our support desk. You will receive a response at ${data.email || 'your email'} within ${supportSla}.`}
                            </p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left 2 Cols: Interactive Support Form */}
                    <div className="lg:col-span-2 bg-[#0b101c] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-amber-400" />
                                    <span>Dispatch an Executive Ticket</span>
                                </h3>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    Fill out the form below to send an encrypted inquiry directly to our priority inbox.
                                </p>
                            </div>
                            <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                SLA: {supportSla}
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                        Your Full Name <span className="text-rose-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="e.g. Alexander Vance"
                                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                        Executive Email <span className="text-rose-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="alex@enterprise.com"
                                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                    Inquiry Subject <span className="text-rose-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="e.g. Enterprise Retainer Tier or Billing Question"
                                    className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                                {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                    Message Particulars <span className="text-rose-400">*</span>
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Provide details about your question, technical request, or corporate account requirement..."
                                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                />
                                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>256-bit encrypted transmission &bull; Zero model training</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{processing ? 'Dispatching Ticket...' : 'Dispatch Ticket'}</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right 1 Col: Dynamic Entity Info & SLA Guarantee */}
                    <div className="space-y-6">
                        
                        {/* Entity Card */}
                        <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                            <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                                <Building2 className="w-4 h-4" />
                                <span>Corporate Entity Details</span>
                            </div>

                            <div className="space-y-3 text-xs text-slate-300">
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Company Name</span>
                                    <span className="font-extrabold text-white text-sm">{companyName}</span>
                                </div>

                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">UK Registration No.</span>
                                    <span className="font-mono text-slate-200">{companyNumber}</span>
                                </div>

                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Registered Office</span>
                                    <div className="flex items-start gap-1.5 text-slate-300 mt-0.5">
                                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                                        <span>{companyAddress}</span>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-slate-800">
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Support Email</span>
                                    <a
                                        href={`mailto:${supportEmail}`}
                                        className="text-amber-400 hover:text-amber-300 font-mono font-semibold text-xs flex items-center gap-1.5 mt-0.5"
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        <span>{supportEmail}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* SLA Guarantee Box */}
                        <div className="bg-gradient-to-br from-amber-500/10 via-[#0b101c] to-amber-500/5 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-3">
                            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                                <Clock className="w-4 h-4" />
                                <span>SLA Response Guarantee</span>
                            </div>
                            <div className="text-2xl font-extrabold text-white font-mono">
                                {supportSla}
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                Every client submission is triaged by our executive team. For urgent billing or enterprise onboarding, our team ensures resolution within the guaranteed SLA window.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </ExecutiveLayout>
    );
}
