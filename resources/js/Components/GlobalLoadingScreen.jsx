import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Sparkles, ShieldCheck, BrainCircuit, Activity } from 'lucide-react';
import Logo from './Logo';

export default function GlobalLoadingScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [statusIndex, setStatusIndex] = useState(0);
    const [customMessage, setCustomMessage] = useState(null);

    const deliberationMessages = [
        "Orchestrating 4-Persona Executive Deliberation...",
        "Evaluating Unit Economics & Fiduciary Stamina...",
        "Stress-Testing Downside Pre-Mortem Blind Spots...",
        "Synthesizing Chairman Verdict & 30-Day Action Roadmap...",
        "Verifying B2B Reverse Charge UK Fiscal Ledger...",
    ];

    // Cycle through status messages while loading
    useEffect(() => {
        if (!isLoading) {
            setStatusIndex(0);
            return;
        }

        const interval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % deliberationMessages.length);
        }, 1400);

        return () => clearInterval(interval);
    }, [isLoading]);

    // Inertia router listener with 80ms debounce to prevent flicker on instant responses
    useEffect(() => {
        let timeout = null;

        const handleStart = () => {
            timeout = setTimeout(() => {
                setIsLoading(true);
            }, 80);
        };

        const handleFinish = () => {
            if (timeout) clearTimeout(timeout);
            setIsLoading(false);
            setCustomMessage(null);
        };

        const handleCustomEvent = (e) => {
            if (e.detail?.active) {
                setIsLoading(true);
                if (e.detail?.message) setCustomMessage(e.detail.message);
            } else {
                setIsLoading(false);
                setCustomMessage(null);
            }
        };

        const removeStart = router.on('start', handleStart);
        const removeFinish = router.on('finish', handleFinish);
        const removeError = router.on('error', handleFinish);
        const removeNavigate = router.on('navigate', handleFinish);

        window.addEventListener('macix:loading', handleCustomEvent);

        return () => {
            if (timeout) clearTimeout(timeout);
            removeStart();
            removeFinish();
            removeError();
            removeNavigate();
            window.removeEventListener('macix:loading', handleCustomEvent);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070c]/90 backdrop-blur-xl animate-fadeIn select-none">
            
            {/* Ambient Radial Golden Aura */}
            <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse" />

            {/* Central Orbital Spinner & Logo */}
            <div className="relative flex items-center justify-center mb-8">
                
                {/* Outer Orbital Rotating Radar Ring */}
                <div className="absolute w-44 h-44 rounded-full border border-amber-500/20 border-t-amber-400 border-r-amber-500/60 animate-spin" style={{ animationDuration: '3s' }} />
                
                {/* Middle Counter-Rotating Ring */}
                <div className="absolute w-36 h-36 rounded-full border border-dashed border-slate-700/60 border-b-amber-400/80 animate-spin" style={{ animationDuration: '4.5s', animationDirection: 'reverse' }} />

                {/* 4 Advisor Orbital Pulsing Dots */}
                <div className="absolute w-44 h-44 animate-spin" style={{ animationDuration: '6s' }}>
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-md shadow-sky-400/80" />
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/80" />
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-md shadow-amber-400/80" />
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-rose-400 shadow-md shadow-rose-400/80" />
                </div>

                {/* Macix AI Luxury Logo Center */}
                <div className="relative z-10 p-3 bg-slate-950/80 rounded-2xl border border-amber-500/40 shadow-2xl shadow-amber-500/20">
                    <Logo size="lg" showText={false} animated={true} href={null} />
                </div>
            </div>

            {/* Brand Title & Ticker */}
            <div className="text-center space-y-3 max-w-md px-6 relative z-10">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-xl font-black tracking-tight text-white font-sans">
                        MACIX
                    </span>
                    <span className="text-xs font-mono font-extrabold px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400">
                        AI ENGINE
                    </span>
                </div>

                {/* Animated Status Message */}
                <div className="min-h-[28px] flex items-center justify-center">
                    <p className="text-xs sm:text-sm font-medium text-amber-300/90 font-mono tracking-wide animate-fadeIn">
                        {customMessage || deliberationMessages[statusIndex]}
                    </p>
                </div>

                {/* Shimmering Progress Bar */}
                <div className="w-56 sm:w-64 h-1.5 bg-slate-900 border border-slate-800 rounded-full overflow-hidden mx-auto relative mt-4 shadow-inner">
                    <div className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full animate-pulse w-full origin-left" style={{ animation: 'shimmer 1.8s infinite ease-in-out' }} />
                </div>

                {/* Trust / Security Footer Note */}
                <div className="pt-6 flex items-center justify-center gap-4 text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Zero Data Retention</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3 text-amber-400" />
                        <span>High-Speed Inference</span>
                    </span>
                </div>
            </div>

        </div>
    );
}
