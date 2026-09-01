import React from 'react';
import { Link } from '@inertiajs/react';

export default function Logo({ 
    size = 'md', 
    showText = true, 
    showSubtitle = true, 
    subtitle = 'Board of AI Advisors',
    badgeText = 'AI',
    animated = false,
    href = '/',
    className = '' 
}) {
    // Size mappings
    const dimensions = {
        sm: {
            box: 'w-7 h-7 rounded-lg',
            svgSize: 28,
            title: 'text-sm',
            badge: 'text-[9px] px-1 py-0.2',
            sub: 'text-[8px]',
        },
        md: {
            box: 'w-9 h-9 rounded-xl',
            svgSize: 36,
            title: 'text-base',
            badge: 'text-[10px] px-1.5 py-0.5',
            sub: 'text-[9px]',
        },
        lg: {
            box: 'w-12 h-12 rounded-2xl',
            svgSize: 48,
            title: 'text-xl',
            badge: 'text-xs px-2 py-0.5',
            sub: 'text-[10px]',
        },
        xl: {
            box: 'w-16 h-16 rounded-3xl',
            svgSize: 64,
            title: 'text-2xl sm:text-3xl',
            badge: 'text-xs px-2.5 py-1',
            sub: 'text-xs tracking-widest',
        },
        hero: {
            box: 'w-24 h-24 rounded-3xl',
            svgSize: 96,
            title: 'text-4xl sm:text-5xl',
            badge: 'text-sm px-3 py-1',
            sub: 'text-sm tracking-widest',
        }
    };

    const config = dimensions[size] || dimensions.md;

    const emblem = (
        <div className={`relative flex items-center justify-center shrink-0 ${config.box} bg-[#0c101d] border border-amber-500/40 shadow-xl shadow-amber-500/15 overflow-hidden group-hover:border-amber-400 group-hover:shadow-amber-500/25 transition-all duration-300 ${animated ? 'animate-pulse' : ''}`}>
            
            {/* Ambient Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-black pointer-events-none" />
            
            {/* Corner Node Light Accents */}
            <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-sky-400 opacity-80" />
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-emerald-400 opacity-80" />
            <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-amber-400 opacity-80" />
            <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-rose-400 opacity-80" />

            {/* Custom SVG Geometric Crown M Emblem */}
            <svg viewBox="0 0 100 100" className="w-[72%] h-[72%] z-10 drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
                <defs>
                    <linearGradient id={`logoGold-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#f59e0b" />
                        <stop offset="80%" stopColor="#d97706" />
                        <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id={`logoShine-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#fffbeb" />
                        <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                </defs>

                {/* Left Column of M */}
                <path d="M 18 78 L 18 34 L 32 24 L 32 78 Z" fill="#92400e" />
                <path d="M 18 34 L 32 24 L 32 72 L 23 78 Z" fill={`url(#logoGold-${size})`} />
                
                {/* Right Column of M */}
                <path d="M 82 78 L 82 34 L 68 24 L 68 78 Z" fill="#92400e" />
                <path d="M 82 34 L 68 24 L 68 72 L 77 78 Z" fill={`url(#logoGold-${size})`} />

                {/* Center Wings */}
                <path d="M 32 24 L 50 50 L 42 58 L 32 42 Z" fill={`url(#logoGold-${size})`} />
                <path d="M 68 24 L 50 50 L 58 58 L 68 42 Z" fill={`url(#logoShine-${size})`} />

                {/* Crown Keystone Peak */}
                <polygon points="50,14 62,28 50,42 38,28" fill={`url(#logoGold-${size})`} stroke="#fef08a" strokeWidth="1.5" />
                <polygon points="50,20 56,28 50,36 44,28" fill={`url(#logoShine-${size})`} />
                
                {/* Center Luminescence Node */}
                <circle cx="50" cy="28" r="3" fill="#ffffff" />
            </svg>
        </div>
    );

    const textContent = showText && (
        <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 leading-none">
                <span className={`font-black tracking-tight text-white font-sans ${config.title}`}>
                    MACIX
                </span>
                {badgeText && (
                    <span className={`font-extrabold font-mono rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 ${config.badge}`}>
                        {badgeText}
                    </span>
                )}
            </div>
            {showSubtitle && subtitle && (
                <span className={`uppercase font-bold tracking-widest text-slate-400 mt-1 font-mono ${config.sub}`}>
                    {subtitle}
                </span>
            )}
        </div>
    );

    const inner = (
        <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
            {emblem}
            {textContent}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block transition-transform active:scale-98">
                {inner}
            </Link>
        );
    }

    return inner;
}
