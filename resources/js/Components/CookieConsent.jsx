import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ShieldCheck, Cookie, X, Check, Lock } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('macix_cookie_consent');
        if (!consent) {
            // Show after a brief delay for smooth UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('macix_cookie_consent', 'all');
        setIsVisible(false);
    };

    const handleEssentialOnly = () => {
        localStorage.setItem('macix_cookie_consent', 'essential');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-md z-50 animate-fadeIn">
            <div className="bg-[#0b101c]/95 border border-amber-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl text-slate-200 space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                            <Cookie className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-extrabold text-white">Executive Cookie &amp; Privacy Notice</h4>
                            <p className="text-[10px] text-slate-400 font-mono">DRAYBOND LIMITED &bull; UK GDPR</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleEssentialOnly}
                        className="text-slate-500 hover:text-slate-300 p-1 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Text Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                    We use essential cookies to maintain secure boardroom authentication, session tokens, and billing currency preferences. Strategic dilemma data is strictly isolated and never tracked or shared.
                </p>

                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>
                        Learn more in our{' '}
                        <Link href="/privacy" className="text-amber-400 hover:underline font-semibold">
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms" className="text-amber-400 hover:underline font-semibold">
                            Terms of Service
                        </Link>.
                    </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 pt-1">
                    <button
                        onClick={handleEssentialOnly}
                        className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center"
                    >
                        Essential Only
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 rounded-xl text-xs font-extrabold shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Accept All</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
