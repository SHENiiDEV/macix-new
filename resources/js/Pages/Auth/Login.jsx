import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Lock, Mail, ArrowRight, ShieldCheck, Crown } from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <ExecutiveLayout>
            <Head title="Executive Sign In — Macix AI" />

            <div className="max-w-md mx-auto my-12">
                <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
                    
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight">
                            Executive Sign In
                        </h1>
                        <p className="text-xs text-slate-400">
                            Access your private virtual Boardroom and strategic minutes
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">Executive Work Email</label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="founder@company.com"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                />
                            </div>
                            {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">Password</label>
                            <div className="relative">
                                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="password"
                                    required
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                />
                            </div>
                            {errors.password && <p className="text-rose-400 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded bg-slate-900 border-slate-800 text-amber-500 focus:ring-amber-500"
                                />
                                <span>Remember session</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
                        >
                            <span>Enter Boardroom</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </form>

                    <div className="pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
                        <span>New executive? </span>
                        <Link href="/register" className="text-amber-400 hover:underline font-bold">
                            Create Account
                        </Link>
                    </div>

                </div>
            </div>
        </ExecutiveLayout>
    );
}
