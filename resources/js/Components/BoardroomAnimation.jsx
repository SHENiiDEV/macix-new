import React, { useState, useEffect } from 'react';
import { Briefcase, Heart, Cpu, Flame, Crown, CheckCircle2 } from 'lucide-react';

export default function BoardroomAnimation({ onComplete, duration = 6000 }) {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps = [
        {
            avatar: 'investor',
            title: 'The Ruthless Investor',
            status: 'Auditing burn rate, capital efficiency, and ROI protection...',
            icon: Briefcase,
            color: 'text-sky-400',
            bg: 'bg-sky-500/10 border-sky-500/30 shadow-sky-500/20',
        },
        {
            avatar: 'mentor',
            title: 'The Empathic Mentor',
            status: 'Analyzing team psychology, founder resilience, and culture integrity...',
            icon: Heart,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10 border-emerald-500/30 shadow-emerald-500/20',
        },
        {
            avatar: 'operator',
            title: 'The Pragmatic Operator',
            status: 'Measuring workflow bottlenecks, SLAs, and execution scalability...',
            icon: Cpu,
            color: 'text-amber-400',
            bg: 'bg-amber-500/10 border-amber-500/30 shadow-amber-500/20',
        },
        {
            avatar: 'devil',
            title: "The Devil's Advocate",
            status: 'Stress-testing fatal assumptions and identifying catastrophic blind spots...',
            icon: Flame,
            color: 'text-rose-400',
            bg: 'bg-rose-500/10 border-rose-500/30 shadow-rose-500/20',
        },
        {
            avatar: 'chairman',
            title: 'The Chairman of the Board',
            status: 'Synthesizing conflicting advice & generating 30-day Action Roadmap...',
            icon: Crown,
            color: 'text-amber-300',
            bg: 'bg-amber-400/20 border-amber-400/50 shadow-amber-400/30',
        },
    ];

    useEffect(() => {
        const interval = 100;
        const totalSteps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep += 1;
            const pct = Math.min(100, Math.round((currentStep / totalSteps) * 100));
            setProgress(pct);

            const stepIndex = Math.min(steps.length - 1, Math.floor((pct / 100) * steps.length));
            setActiveStep(stepIndex);

            if (currentStep >= totalSteps) {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, interval);

        return () => clearInterval(timer);
    }, [duration]);

    const currentAdvisor = steps[activeStep];

    return (
        <div className="relative w-full max-w-4xl mx-auto py-12 px-6 flex flex-col items-center justify-center text-center">
            
            {/* Background Glows */}
            <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -top-10"></div>
            <div className="absolute w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -bottom-10"></div>

            {/* Boardroom Circle Layout */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 my-8 flex items-center justify-center">
                
                {/* Deliberation Outer Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-700/60 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-4 rounded-full border border-slate-800/80"></div>

                {/* Central Chairman Hub */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-600/30 via-slate-900 to-slate-950 border-2 border-amber-500/50 flex flex-col items-center justify-center shadow-xl shadow-amber-500/10">
                    <div className="pulse-node absolute inset-0 rounded-full bg-amber-500/20"></div>
                    <Crown className="w-8 h-8 text-amber-400 animate-bounce" />
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-300 mt-1">Boardroom</span>
                </div>

                {/* 4 Orbiting Advisors */}
                {/* Top: Investor */}
                <div className={`absolute top-0 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 0 ? 'scale-115 z-20' : 'scale-95 opacity-70'}`}>
                    <div className={`w-14 h-14 rounded-2xl ${steps[0].bg} border backdrop-blur-md flex items-center justify-center text-sky-400 shadow-lg`}>
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 mt-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">Investor</span>
                </div>

                {/* Right: Mentor */}
                <div className={`absolute right-0 translate-x-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 1 ? 'scale-115 z-20' : 'scale-95 opacity-70'}`}>
                    <div className={`w-14 h-14 rounded-2xl ${steps[1].bg} border backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg`}>
                        <Heart className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 mt-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">Mentor</span>
                </div>

                {/* Bottom: Operator */}
                <div className={`absolute bottom-0 translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 2 ? 'scale-115 z-20' : 'scale-95 opacity-70'}`}>
                    <div className={`w-14 h-14 rounded-2xl ${steps[2].bg} border backdrop-blur-md flex items-center justify-center text-amber-400 shadow-lg`}>
                        <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 mt-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">Operator</span>
                </div>

                {/* Left: Devil's Advocate */}
                <div className={`absolute left-0 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 3 ? 'scale-115 z-20' : 'scale-95 opacity-70'}`}>
                    <div className={`w-14 h-14 rounded-2xl ${steps[3].bg} border backdrop-blur-md flex items-center justify-center text-rose-400 shadow-lg`}>
                        <Flame className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 mt-1 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">Devil's Adv.</span>
                </div>
            </div>

            {/* Live Deliberation Feed Card */}
            <div className="w-full max-w-lg bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-all">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        Active Deliberation
                    </span>
                </div>

                <h4 className={`text-base font-extrabold transition-all duration-300 ${currentAdvisor.color}`}>
                    {currentAdvisor.title}
                </h4>

                <p className="text-xs text-slate-300 mt-1.5 h-10 flex items-center justify-center transition-opacity duration-300">
                    "{currentAdvisor.status}"
                </p>

                {/* Progress bar */}
                <div className="mt-5 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>Board Consensus Engine</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div 
                            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-200"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
