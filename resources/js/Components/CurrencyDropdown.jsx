import React, { useState, useRef, useEffect } from 'react';
import { useCurrency, CURRENCIES } from '../Context/CurrencyContext';
import { ChevronDown, Check } from 'lucide-react';

export default function CurrencyDropdown({ className = '' }) {
    const { currency, setCurrency, currentCurrency } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative inline-block ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer shadow-sm"
            >
                <span className="text-sm">{currentCurrency.flag}</span>
                <span>{currentCurrency.code}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#0b101c] border border-slate-800 rounded-2xl shadow-2xl py-1.5 z-50 animate-fadeIn text-xs">
                    {Object.values(CURRENCIES).map((curr) => {
                        const isSelected = curr.code === currency;
                        return (
                            <button
                                key={curr.code}
                                type="button"
                                onClick={() => {
                                    setCurrency(curr.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors cursor-pointer ${
                                    isSelected
                                        ? 'bg-amber-500/10 text-amber-300 font-bold'
                                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">{curr.flag}</span>
                                    <span>{curr.code} ({curr.symbol})</span>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
