import React, { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Sparkles, 
    History, 
    CreditCard, 
    Shield, 
    Plus, 
    LogOut, 
    User, 
    Building2, 
    ChevronDown,
    Scale
} from 'lucide-react';
import TopUpModal from './TopUpModal';
import CurrencyDropdown from './CurrencyDropdown';
import { useCurrency } from '../Context/CurrencyContext';

export default function Navbar() {
    const { auth, company } = usePage().props;
    const { formatPrice } = useCurrency();
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const handleLogout = () => {
        router.post('/logout');
    };

    const walletBalance = auth?.user?.wallet_balance ?? 0;

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#07090e]/85 backdrop-blur-xl transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    
                    {/* Brand */}
                    <div className="flex items-center gap-6">
                        <Link href={auth?.user ? "/dashboard" : "/"} className="flex items-center gap-2.5 group">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                                <span className="font-serif text-lg tracking-tighter">M</span>
                            </div>
                            <div>
                                <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                                    MACIX <span className="text-amber-400 text-xs px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">AI</span>
                                </span>
                                <span className="hidden sm:block text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                                    Board of AI Advisors
                                </span>
                            </div>
                        </Link>

                        {/* Main Nav Links (when authenticated) */}
                        {auth?.user && (
                            <nav className="hidden md:flex items-center gap-1 pl-4 border-l border-slate-800">
                                <Link
                                    href="/dashboard"
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                        window.location.pathname === '/dashboard' 
                                            ? 'bg-slate-800 text-white' 
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                    }`}
                                >
                                    <LayoutDashboard className="w-3.5 h-3.5" />
                                    <span>Dashboard</span>
                                </Link>

                                <Link
                                    href="/board/new"
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                        window.location.pathname === '/board/new' 
                                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' 
                                            : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/50'
                                    }`}
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                    <span>New Session</span>
                                </Link>

                                <Link
                                    href="/board/history"
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                        window.location.pathname === '/board/history' 
                                            ? 'bg-slate-800 text-white' 
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                    }`}
                                >
                                    <History className="w-3.5 h-3.5" />
                                    <span>Minutes Archive</span>
                                </Link>

                                <Link
                                    href="/billing"
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                        window.location.pathname === '/billing' 
                                            ? 'bg-slate-800 text-white' 
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                    }`}
                                >
                                    <CreditCard className="w-3.5 h-3.5" />
                                    <span>Billing &amp; Invoices</span>
                                </Link>
                            </nav>
                        )}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2.5">
                        
                        {/* Currency Selector */}
                        <CurrencyDropdown />

                        {auth?.user ? (
                            <>
                                {/* Wallet Balance Pill */}
                                <div className="flex items-center bg-[#0b101d] border border-slate-800 rounded-xl p-1 shadow-inner">
                                    <Link 
                                        href="/billing"
                                        className="px-3 py-1 text-xs font-mono font-bold text-slate-200 hover:text-white transition-colors"
                                    >
                                        <span className="text-[10px] text-slate-400 uppercase font-sans font-semibold mr-1.5">Wallet:</span>
                                        <span className="text-amber-400 font-extrabold">{formatPrice(walletBalance, 2)}</span>
                                    </Link>
                                    <button
                                        onClick={() => setIsTopUpOpen(true)}
                                        className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-extrabold rounded-lg transition-all flex items-center gap-1 shadow-sm shadow-amber-500/20 cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3 stroke-[3]" />
                                        <span>Top Up</span>
                                    </button>
                                </div>

                                {/* User Menu */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center gap-2 p-1.5 pl-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 transition-all text-xs"
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold">
                                            {auth.user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="hidden sm:inline font-semibold max-w-[120px] truncate text-white">
                                            {auth.user.company_name || auth.user.name}
                                        </span>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                                    </button>

                                    {/* Dropdown */}
                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-[#0c1220] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50 text-xs animate-fadeIn">
                                            <div className="px-3.5 py-2 border-b border-slate-800/80">
                                                <p className="font-bold text-white truncate">{auth.user.name}</p>
                                                <p className="text-[11px] text-slate-400 truncate">{auth.user.email}</p>
                                                {auth.user.company_name && (
                                                    <p className="text-[10px] text-amber-400 font-medium truncate mt-0.5">
                                                        {auth.user.company_name}
                                                    </p>
                                                )}
                                            </div>

                                            <Link 
                                                href="/board/new" 
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="flex items-center gap-2 px-3.5 py-2 text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                            >
                                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                                <span>Convene Board</span>
                                            </Link>

                                            <Link 
                                                href="/billing" 
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="flex items-center gap-2 px-3.5 py-2 text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                            >
                                                <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                                                <span>Invoices &amp; Top-Up</span>
                                            </Link>

                                            <Link 
                                                href="/terms" 
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="flex items-center gap-2 px-3.5 py-2 text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                            >
                                                <Scale className="w-3.5 h-3.5 text-slate-400" />
                                                <span>UK Legal Terms</span>
                                            </Link>

                                            <div className="border-t border-slate-800/80 my-1"></div>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-2 px-3.5 py-2 text-rose-400 hover:bg-rose-500/10 transition-colors text-left"
                                            >
                                                <LogOut className="w-3.5 h-3.5" />
                                                <span>Sign Out</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    Executive Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg shadow-amber-500/20 transition-all"
                                >
                                    Convene Your Board
                                </Link>
                            </div>
                        )}

                    </div>

                </div>
            </header>

            {/* TopUp Modal */}
            <TopUpModal 
                isOpen={isTopUpOpen} 
                onClose={() => setIsTopUpOpen(false)} 
            />
        </>
    );
}
