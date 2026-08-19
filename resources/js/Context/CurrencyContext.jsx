import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const CURRENCIES = {
    EUR: { code: 'EUR', symbol: '€', flag: '🇪🇺', rate: 1.0, name: 'Euro' },
    USD: { code: 'USD', symbol: '$', flag: '🇺🇸', rate: 1.08, name: 'US Dollar' },
    GBP: { code: 'GBP', symbol: '£', flag: '🇬🇧', rate: 0.85, name: 'British Pound' },
};

export function CurrencyProvider({ children }) {
    const [currency, setCurrency] = useState('EUR');

    useEffect(() => {
        const saved = localStorage.getItem('macix_currency');
        if (saved && CURRENCIES[saved]) {
            setCurrency(saved);
        }
    }, []);

    const changeCurrency = (code) => {
        if (CURRENCIES[code]) {
            setCurrency(code);
            localStorage.setItem('macix_currency', code);
        }
    };

    const convertPrice = (eurAmount) => {
        const num = Number(eurAmount) || 0;
        const rate = CURRENCIES[currency]?.rate || 1.0;
        return num * rate;
    };

    const formatPrice = (eurAmount, decimals = 0) => {
        const converted = convertPrice(eurAmount);
        const curr = CURRENCIES[currency] || CURRENCIES.EUR;
        
        if (curr.code === 'EUR') {
            return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
        }
        return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
    };

    return (
        <CurrencyContext.Provider value={{
            currency,
            currentCurrency: CURRENCIES[currency] || CURRENCIES.EUR,
            currencies: CURRENCIES,
            setCurrency: changeCurrency,
            convertPrice,
            formatPrice,
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        // Fallback if rendered outside provider
        return {
            currency: 'EUR',
            currentCurrency: CURRENCIES.EUR,
            currencies: CURRENCIES,
            setCurrency: () => {},
            convertPrice: (amt) => Number(amt) || 0,
            formatPrice: (amt, decimals = 0) => `€${(Number(amt) || 0).toFixed(decimals)}`,
        };
    }
    return context;
}
