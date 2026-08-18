import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Lock, Mail, User, Building2, Phone, ArrowRight, ShieldCheck, Crown } from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        vat_number: '',
        billing_address: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <ExecutiveLayout>
            <Head title="Create Executive Account — Macix AI" />

            <div className="max-w-xl mx-auto my-10">
                <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
                    
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight">
                            Unlock Your AI Boardroom
                        </h1>
                        <p className="text-xs text-slate-400">
                            Enterprise-grade deliberation suite operated by <strong>DRAYBOND LIMITED</strong>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Executive Full Name *</label>
                                <div className="relative">
                                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Alex Vance"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                                {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Corporate Email *</label>
                                <div className="relative">
                                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="alex@company.com"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                                {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Company Name (Optional)</label>
                                <div className="relative">
                                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="text"
                                        value={data.company_name}
                                        onChange={(e) => setData('company_name', e.target.value)}
                                        placeholder="Vance Capital Ltd"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">VAT / Tax ID (Optional)</label>
                                <input
                                    type="text"
                                    value={data.vat_number}
                                    onChange={(e) => setData('vat_number', e.target.value)}
                                    placeholder="GB123456789"
                                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-amber-500 text-xs"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Password *</label>
                                <div className="relative">
                                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="password"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Min 8 characters"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                                {errors.password && <p className="text-rose-400 text-xs mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Confirm Password *</label>
                                <div className="relative">
                                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="password"
                                        required
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="Repeat password"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-slate-400 flex items-start gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>
                                By registering, you agree to our <Link href="/terms" className="text-amber-400 underline">Terms of Service</Link> and <Link href="/privacy" className="text-amber-400 underline">Privacy Policy</Link>. Strategic briefs are isolated and strictly confidential.
                            </span>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
                        >
                            <span>Create Account &amp; Access Boardroom</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </form>

                    <div className="pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
                        <span>Already registered? </span>
                        <Link href="/login" className="text-amber-400 hover:underline font-bold">
                            Sign In
                        </Link>
                    </div>

                </div>
            </div>
        </ExecutiveLayout>
    );
}
