import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { X, CreditCard, ShieldCheck, Zap, Building2, CheckCircle2, Lock } from 'lucide-react';
import { useCurrency } from '../Context/CurrencyContext';

export default function TopUpModal({ isOpen, onClose, defaultAmount = 1799 }) {
    if (!isOpen) return null;

    const { company } = usePage().props;
    const { formatPrice } = useCurrency();
    const [selectedPreset, setSelectedPreset] = useState(defaultAmount);
    const [customAmount, setCustomAmount] = useState('');
    const [cardName, setCardName] = useState('Executive Cardholder');
    const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4022');
    const [cardExpiry, setCardExpiry] = useState('12/28');
    const [cardCvc, setCardCvc] = useState('884');
    const [isSimulating, setIsSimulating] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        amount: defaultAmount,
        payment_method: 'card_instant',
    });

    const presets = [
        { amount: 559, label: 'Starter Board', desc: '1 Full 4-Advisor Deliberation & Minutes' },
        { amount: 1799, label: 'Pro Board (Most Selected)', desc: 'Custom Personas + 30-Day Action Roadmap', popular: true },
        { amount: 3499, label: 'Growth Executive Pack', desc: '2 Pro Sessions + Balance Sheet Ingestion' },
        { amount: 5999, label: 'Enterprise Retainer', desc: 'Institutional Advisory + 10 Sessions / Month' },
    ];

    const handleSelectPreset = (amount) => {
        setSelectedPreset(amount);
        setCustomAmount('');
        setData('amount', amount);
    };

    const handleCustomAmountChange = (e) => {
        const val = e.target.value;
        setCustomAmount(val);
        setSelectedPreset(null);
        setData('amount', val ? parseFloat(val) : 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSimulating(true);
        post('/wallet/top-up', {
            preserveScroll: true,
            onSuccess: () => {
                setIsSimulating(false);
                onClose();
            },
            onError: () => {
                setIsSimulating(false);
            },
        });
    };

    const currentAmount = selectedPreset || parseFloat(customAmount) || 0;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-xl bg-[#0d121f] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
                
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-[#131b2e] to-slate-900">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold tracking-tight text-white">Prepaid Wallet Top-Up</h3>
                            <p className="text-xs text-slate-400">Official B2B Invoicing &bull; {company?.name || 'CHANGE IT UP SERVICES LTD'}</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    
                    {/* Preset Cards */}
                    <div className="space-y-2.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Select Executive Package</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                            {presets.map((preset) => (
                                <button
                                    key={preset.amount}
                                    type="button"
                                    onClick={() => handleSelectPreset(preset.amount)}
                                    className={`relative p-3.5 rounded-xl border text-left transition-all ${
                                        selectedPreset === preset.amount
                                            ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/10 text-white'
                                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300'
                                    }`}
                                >
                                    {preset.popular && (
                                        <span className="absolute -top-2 right-2 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 rounded">
                                            Popular
                                        </span>
                                    )}
                                    <div className="text-base font-extrabold text-white">{formatPrice(preset.amount)}</div>
                                    <div className="text-xs font-medium text-amber-400/90 mt-0.5">{preset.label}</div>
                                    <div className="text-[10px] text-slate-400 leading-tight mt-1">{preset.desc}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Amount */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Or Enter Custom Amount (EUR)</label>
                            <span className="text-[11px] text-slate-400">Min. €10 &bull; Max €50,000</span>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                            <input
                                type="number"
                                min="10"
                                max="50000"
                                step="1"
                                placeholder="e.g. 750"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                className="w-full pl-8 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
                            />
                        </div>
                        {errors.amount && <p className="text-xs text-rose-400 mt-1">{errors.amount}</p>}
                    </div>

                    {/* Payment Simulation Form */}
                    <div className="p-3.5 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                            <div className="flex items-center gap-1.5">
                                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Encrypted Corporate Payment Gateway</span>
                            </div>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Instant Clearance</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    placeholder="Cardholder Name"
                                    className="w-full px-3 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-slate-700"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    placeholder="Card Number"
                                    className="w-full px-3 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-slate-200 font-mono focus:outline-none focus:border-slate-700"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    value={cardExpiry}
                                    onChange={(e) => setCardExpiry(e.target.value)}
                                    placeholder="MM/YY"
                                    className="w-full px-3 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-slate-200 font-mono text-center focus:outline-none focus:border-slate-700"
                                />
                                <input
                                    type="text"
                                    value={cardCvc}
                                    onChange={(e) => setCardCvc(e.target.value)}
                                    placeholder="CVC"
                                    className="w-full px-3 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-slate-200 font-mono text-center focus:outline-none focus:border-slate-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tax & Legal Compliance Info */}
                    <div className="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-slate-400 space-y-1">
                        <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>B2B Invoicing & Tax Guarantee</span>
                        </div>
                        <p>
                            Upon successful clearance, an official VAT invoice will be generated by <strong>DRAYBOND LIMITED</strong> (Company No. 16021806) and delivered immediately with 0% Reverse Charge.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing || isSimulating || currentAmount <= 0}
                        className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                        {processing || isSimulating ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                                <span>Authorizing Funds & Generating Invoice...</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 fill-slate-950" />
                                <span>Authorize &amp; Top Up €{number_format(currentAmount)}</span>
                            </div>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
}

function number_format(val) {
    if (!val || isNaN(val)) return '0.00';
    return Number(val).toFixed(2);
}
