import React, { useState, useEffect } from 'react';
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
    Scale,
    Menu,
    X,
    Lock,
    HelpCircle,
    Mail,
    Zap,
    Info
} from 'lucide-react';
import TopUpModal from './TopUpModal';
import CurrencyDropdown from './CurrencyDropdown';
import { useCurrency } from '../Context/CurrencyContext';

export default function Navbar() {
    const { auth, company } = usePage().props;
    const { formatPrice } = useCurrency();
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleLogout = () => {
        setIsMobileMenuOpen(false);
        router.post('/logout');
    };

    const walletBalance = auth?.user?.wallet_balance ?? 0;

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#07090e]/85 backdrop-blur-xl transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    
                    {/* Brand & Nav */}
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

                        {/* Main Nav Links (Desktop) */}
                        <nav className="hidden lg:flex items-center gap-1 pl-4 border-l border-slate-800">
                            {auth?.user ? (
                                <>
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
                                        <span>Minutes</span>
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
                                        <span>Billing</span>
                                    </Link>
                                </>
                            ) : null}

                            <Link
                                href="/how-it-works"
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                    window.location.pathname === '/how-it-works' 
                                        ? 'bg-slate-800 text-white' 
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                }`}
                            >
                                <Zap className="w-3.5 h-3.5 text-amber-400" />
                                <span>How It Works</span>
                            </Link>

                            <Link
                                href="/support"
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                    window.location.pathname === '/support' 
                                        ? 'bg-slate-800 text-white' 
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                }`}
                            >
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>Support</span>
                            </Link>

                            <Link
                                href="/contact"
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                    window.location.pathname === '/contact' 
                                        ? 'bg-slate-800 text-white' 
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                }`}
                            >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Contact</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Right Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-2.5">
                        
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
                                        className="flex items-center gap-2 p-1.5 pl-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 transition-all text-xs cursor-pointer"
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
                                                href="/about" 
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="flex items-center gap-2 px-3.5 py-2 text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                            >
                                                <Info className="w-3.5 h-3.5 text-slate-400" />
                                                <span>About Corporate</span>
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
                                                className="w-full flex items-center gap-2 px-3.5 py-2 text-rose-400 hover:bg-rose-500/10 transition-colors text-left cursor-pointer"
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

                    {/* Mobile Hamburger Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <CurrencyDropdown />

                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                            aria-label="Open mobile menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </header>

            {/* Mobile Slide-Out Drawer (From the Right) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden animate-fadeIn">
                    
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0b101c] border-l border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideLeft z-50">
                        
                        <div className="space-y-6">
                            
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">
                                        M
                                    </div>
                                    <span className="font-extrabold text-white text-sm">MACIX AI</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* User Profile Card (if authenticated) */}
                            {auth?.user ? (
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#111728] border border-slate-800 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                                            {auth.user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-bold text-white text-xs truncate">{auth.user.name}</p>
                                            <p className="text-[11px] text-slate-400 truncate">{auth.user.email}</p>
                                        </div>
                                    </div>

                                    {/* Mobile Wallet Balance Bar */}
                                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Wallet Balance:</span>
                                            <span className="text-sm font-extrabold text-amber-400 font-mono">{formatPrice(walletBalance, 2)}</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsTopUpOpen(true);
                                            }}
                                            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-extrabold rounded-lg transition-all flex items-center gap-1 shadow-sm shadow-amber-500/20"
                                        >
                                            <Plus className="w-3 h-3 stroke-[3]" />
                                            <span>Top Up</span>
                                        </button>
                                    </div>
                                </div>
                            ) : null}

                            {/* Navigation Links */}
                            <div className="space-y-1 text-xs font-semibold">
                                {auth?.user ? (
                                    <>
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                                                window.location.pathname === '/dashboard' 
                                                    ? 'bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20' 
                                                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                            }`}
                                        >
                                            <LayoutDashboard className="w-4 h-4 text-amber-400" />
                                            <span>Executive Dashboard</span>
                                        </Link>

                                        <Link
                                            href="/board/new"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                                                window.location.pathname === '/board/new' 
                                                    ? 'bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20' 
                                                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                            }`}
                                        >
                                            <Sparkles className="w-4 h-4 text-amber-400" />
                                            <span>Convene New Board</span>
                                        </Link>

                                        <Link
                                            href="/board/history"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                                                window.location.pathname === '/board/history' 
                                                    ? 'bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20' 
                                                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                            }`}
                                        >
                                            <History className="w-4 h-4 text-amber-400" />
                                            <span>Minutes Archive</span>
                                        </Link>

                                        <Link
                                            href="/billing"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                                                window.location.pathname === '/billing' 
                                                    ? 'bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20' 
                                                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                            }`}
                                        >
                                            <CreditCard className="w-4 h-4 text-sky-400" />
                                            <span>Billing &amp; Invoices</span>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-white"
                                        >
                                            <Sparkles className="w-4 h-4 text-amber-400" />
                                            <span>Board Overview</span>
                                        </Link>

                                        <Link
                                            href="/login"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-white"
                                        >
                                            <User className="w-4 h-4 text-amber-400" />
                                            <span>Sign In</span>
                                        </Link>

                                        <div className="pt-2">
                                            <Link
                                                href="/register"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                                            >
                                                <span>Convene Your Board</span>
                                            </Link>
                                        </div>
                                    </>
                                )}

                                {/* Main Guide & Support Links in Drawer */}
                                <div className="pt-4 border-t border-slate-800/80 space-y-1">
                                    <div className="px-3.5 py-1 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                        Resources &amp; Desk
                                    </div>
                                    <Link
                                        href="/how-it-works"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                                        <span>How It Works</span>
                                    </Link>
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Info className="w-3.5 h-3.5 text-sky-400" />
                                        <span>About Us</span>
                                    </Link>
                                    <Link
                                        href="/support"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Help Desk &amp; FAQ</span>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Mail className="w-3.5 h-3.5 text-amber-400" />
                                        <span>Contact Support</span>
                                    </Link>
                                </div>

                                {/* Legal Section in Drawer */}
                                <div className="pt-4 border-t border-slate-800/80 space-y-1">
                                    <div className="px-3.5 py-1 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                        Compliance &amp; Legal
                                    </div>
                                    <Link
                                        href="/terms"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Scale className="w-3.5 h-3.5" />
                                        <span>Terms of Service</span>
                                    </Link>
                                    <Link
                                        href="/privacy"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Lock className="w-3.5 h-3.5" />
                                        <span>Privacy &amp; GDPR</span>
                                    </Link>
                                    <Link
                                        href="/refund"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/60"
                                    >
                                        <Shield className="w-3.5 h-3.5" />
                                        <span>Refund Policy</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* Drawer Footer */}
                        <div className="pt-6 border-t border-slate-800 space-y-3">
                            {auth?.user && (
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Sign Out</span>
                                </button>
                            )}

                            <div className="text-[10px] text-slate-500 text-center font-mono leading-tight">
                                {company?.name || 'CHANGE IT UP SERVICES LTD'}<br />
                                UK Co. No. {company?.number || '16107295'} &bull; SLA {company?.sla || '24-48 hours'}
                            </div>
                        </div>

                    </div>

                </div>
            )}

            {/* TopUp Modal */}
            <TopUpModal 
                isOpen={isTopUpOpen} 
                onClose={() => setIsTopUpOpen(false)} 
            />
        </>
    );
}
