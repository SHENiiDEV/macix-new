import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { ShieldCheck, CheckCircle2, AlertCircle, X, Scale, Lock, Mail, Building2 } from 'lucide-react';
import Navbar from '../Components/Navbar';
import CookieConsent from '../Components/CookieConsent';
import OfflineBanner from '../Components/OfflineBanner';
import { CurrencyProvider } from '../Context/CurrencyContext';

export default function ExecutiveLayout({ children, title }) {
    const { flash, company } = usePage().props;
    const [dismissFlash, setDismissFlash] = useState(false);

    return (
        <CurrencyProvider>
            <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200 relative">
                
                {/* Offline Detection Banner */}
                <OfflineBanner />

                {/* Navigation */}
                <Navbar />

                {/* Flash Message Banner */}
                {flash?.success && !dismissFlash && (
                    <div className="bg-emerald-500/10 border-b border-emerald-500/30 py-3 px-4 text-emerald-300 text-xs font-medium flex items-center justify-between animate-fadeIn">
                        <div className="max-w-7xl mx-auto flex items-center gap-2 w-full">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{flash.success}</span>
                        </div>
                        <button onClick={() => setDismissFlash(true)} className="text-emerald-400/80 hover:text-emerald-200">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {flash?.error && !dismissFlash && (
                    <div className="bg-rose-500/10 border-b border-rose-500/30 py-3 px-4 text-rose-300 text-xs font-medium flex items-center justify-between animate-fadeIn">
                        <div className="max-w-7xl mx-auto flex items-center gap-2 w-full">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                            <span>{flash.error}</span>
                        </div>
                        <button onClick={() => setDismissFlash(true)} className="text-rose-400/80 hover:text-rose-200">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Main Page Content */}
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </main>

                {/* Cookie Consent Floating Modal */}
                <CookieConsent />

                {/* Official B2B Footer with INCHWARD LIMITED credentials */}
                <footer className="w-full border-t border-slate-800/80 bg-[#05070a] text-slate-400 text-xs py-10 mt-auto">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            
                            {/* Column 1: Brand & Entity */}
                            <div className="md:col-span-2 space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black font-serif text-xs">
                                        M
                                    </div>
                                    <span className="font-extrabold text-white text-sm tracking-tight">MACIX AI</span>
                                    <span className="text-[10px] text-slate-500 font-mono">B2B SaaS</span>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                                    Enterprise-grade virtual Board of AI Advisors for founders, CEOs, and executive leaders. High-ticket strategic deliberation and resolution engine.
                                </p>
                                <div className="text-[11px] text-slate-500 leading-relaxed font-mono">
                                    <strong>Operating Entity:</strong> {company?.name || 'INCHWARD LIMITED'}<br />
                                    <strong>Company Number:</strong> {company?.number || '16021412'}<br />
                                    <strong>Registered Address:</strong> {company?.address || 'Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF'}
                                </div>
                            </div>

                            {/* Column 2: Legal Policies */}
                            <div className="space-y-2">
                                <h5 className="font-bold text-white text-xs uppercase tracking-wider">Legal Compliance</h5>
                                <ul className="space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <Link href="/terms" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                                            <Scale className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Terms of Service (UK)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                                            <Lock className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Privacy &amp; UK GDPR</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/refund" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                                            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                                            <span>B2B Refund Policy</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Contact & Invoicing */}
                            <div className="space-y-2">
                                <h5 className="font-bold text-white text-xs uppercase tracking-wider">Executive Contact</h5>
                                <p className="text-xs text-slate-400">
                                    Dedicated B2B &amp; Invoicing Desk:
                                </p>
                                <a 
                                    href={`mailto:${company?.email || 'info@voltoria.co.uk'}`} 
                                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono text-xs font-semibold"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    <span>{company?.email || 'info@voltoria.co.uk'}</span>
                                </a>
                                <div className="pt-2 text-[10px] text-slate-500">
                                    Invoices delivered with 0% Reverse Charge VAT automatically upon payment clearance.
                                </div>
                            </div>

                        </div>

                        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
                            <p>&copy; {new Date().getFullYear()} {company?.name || 'INCHWARD LIMITED'}. All rights reserved. Registered in England &amp; Wales.</p>
                            <p className="text-slate-400 font-mono">Confidential B2B Strategic Simulation Engine</p>
                        </div>
                    </div>
                </footer>
            </div>
        </CurrencyProvider>
    );
}
