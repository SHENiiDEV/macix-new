import React, { useState } from 'react';
import { useForm, Head, usePage } from '@inertiajs/react';
import { 
    CreditCard, 
    Download, 
    Plus, 
    Building2, 
    ShieldCheck, 
    FileText, 
    CheckCircle2, 
    ArrowUpRight, 
    ArrowDownLeft, 
    Clock,
    Lock
} from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';
import TopUpModal from '../../Components/TopUpModal';
import { useCurrency } from '../../Context/CurrencyContext';

export default function BillingIndex({ transactions, walletBalance }) {
    const { auth, company } = usePage().props;
    const { formatPrice } = useCurrency();
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    // Profile & Billing Address Form
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        name: auth.user.name || '',
        company_name: auth.user.company_name || '',
        vat_number: auth.user.vat_number || '',
        billing_address: auth.user.billing_address || '',
        phone: auth.user.phone || '',
    });

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        post('/profile', {
            preserveScroll: true,
        });
    };

    const transactionList = transactions?.data || [];

    return (
        <ExecutiveLayout>
            <Head title="Billing & Invoices — Macix AI" />

            <div className="space-y-10 max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Financial Engine &amp; Accounting</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Prepaid Wallet &amp; B2B Invoices
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">
                            Issued by <strong>{company?.name || 'DRAYBOND LIMITED'}</strong> &bull; Reverse Charge VAT 0.00%
                        </p>
                    </div>

                    <button
                        onClick={() => setIsTopUpOpen(true)}
                        className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Top Up Wallet</span>
                    </button>
                </div>

                {/* Top Wallet Overview & Legal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Wallet Balance Hero Card */}
                    <div className="md:col-span-2 bg-gradient-to-br from-[#0c1220] via-[#11192e] to-[#0c1220] border-2 border-amber-500/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                                    Prepaid Wallet Balance
                                </span>
                                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Instant Clearance
                                </span>
                            </div>
                            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-3">
                                {formatPrice(walletBalance, 2)}
                            </div>
                            <p className="text-xs text-slate-300 mt-2">
                                Funds are immediately available to convene Starter ({formatPrice(149)}), Pro ({formatPrice(499)}), or Enterprise ({formatPrice(1499)}) board sessions.
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
                            <button
                                onClick={() => setIsTopUpOpen(true)}
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                            >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                                <span>Add Funds</span>
                            </button>
                            <span className="text-[11px] text-slate-400 font-mono">
                                Top-up presets: €149 &bull; €499 &bull; €1,499
                            </span>
                        </div>
                    </div>

                    {/* Legal Entity & Compliance Card */}
                    <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between space-y-4">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-3">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-extrabold text-white">{company?.name || 'DRAYBOND LIMITED'}</h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                Company No. {company?.number || '16021806'}<br />
                                Academy House, 11 Dunraven Place<br />
                                Bridgend, Mid Glamorgan, CF31 1JF, UK
                            </p>
                        </div>

                        <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>0% Reverse Charge B2B</span>
                            </div>
                            <p className="text-[10px] text-slate-500">
                                Invoices are automatically generated and stamped as PAID upon every wallet top-up.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Profile & Billing Address Setup */}
                <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-extrabold text-white">Company &amp; Tax Details</h3>
                                <p className="text-xs text-slate-400">These details will be printed on all official VAT PDF invoices.</p>
                            </div>
                        </div>
                        {recentlySuccessful && (
                            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Saved successfully</span>
                            </span>
                        )}
                    </div>

                    <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">Executive Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">Company Legal Name</label>
                            <input
                                type="text"
                                value={data.company_name}
                                onChange={(e) => setData('company_name', e.target.value)}
                                placeholder="e.g. Acme Ventures Ltd"
                                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">VAT / Tax Registration Number</label>
                            <input
                                type="text"
                                value={data.vat_number}
                                onChange={(e) => setData('vat_number', e.target.value)}
                                placeholder="e.g. GB123456789 or EU123456789"
                                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="text-slate-300 font-semibold block mb-1.5">Phone / Contact</label>
                            <input
                                type="text"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                placeholder="e.g. +44 20 7946 0912"
                                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="text-slate-300 font-semibold block mb-1.5">Billing Address</label>
                            <textarea
                                rows={2}
                                value={data.billing_address}
                                onChange={(e) => setData('billing_address', e.target.value)}
                                placeholder="Street, Suite, City, Postal Code, Country"
                                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer disabled:opacity-50"
                            >
                                {processing ? 'Updating...' : 'Save Invoicing Profile'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* B2B Transactions & Invoices Table */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                            <FileText className="w-4 h-4 text-amber-400" />
                            <span>B2B Transaction History &amp; Official Invoices</span>
                        </h2>
                    </div>

                    {transactionList.length > 0 ? (
                        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0b101c] shadow-xl">
                            <table className="w-full text-left text-xs text-slate-300">
                                <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
                                    <tr>
                                        <th className="py-3.5 px-4">Reference</th>
                                        <th className="py-3.5 px-4">Particulars / Strict Service Name</th>
                                        <th className="py-3.5 px-4">Type</th>
                                        <th className="py-3.5 px-4 text-right">Amount (EUR)</th>
                                        <th className="py-3.5 px-4 text-right">Balance After</th>
                                        <th className="py-3.5 px-4 text-center">Status</th>
                                        <th className="py-3.5 px-4 text-right">Invoice Document</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/80">
                                    {transactionList.map((txn) => {
                                        const isTopUp = txn.type === 'top_up';
                                        const amountNum = Number(txn.amount_eur);
                                        return (
                                            <tr key={txn.id} className="hover:bg-slate-800/30 transition-colors">
                                                <td className="py-4 px-4 font-mono font-bold text-white whitespace-nowrap">
                                                    {txn.reference}
                                                </td>
                                                <td className="py-4 px-4 font-semibold text-slate-200">
                                                    <div>{txn.service_name}</div>
                                                    <div className="text-[10px] text-slate-500 font-mono">
                                                        {new Date(txn.created_at).toLocaleDateString()} &bull; {new Date(txn.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap">
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                                        isTopUp 
                                                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                                            : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                                    }`}>
                                                        {isTopUp ? <ArrowDownLeft className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                                                        <span>{isTopUp ? 'Top-Up' : 'Board Fee'}</span>
                                                    </span>
                                                </td>
                                                <td className={`py-4 px-4 font-mono font-extrabold text-right whitespace-nowrap ${
                                                    isTopUp ? 'text-emerald-400' : 'text-slate-300'
                                                }`}>
                                                    {isTopUp ? `+€${amountNum.toFixed(2)}` : `-€${Math.abs(amountNum).toFixed(2)}`}
                                                </td>
                                                <td className="py-4 px-4 font-mono text-slate-400 text-right whitespace-nowrap">
                                                    €{Number(txn.balance_after).toFixed(2)}
                                                </td>
                                                <td className="py-4 px-4 text-center whitespace-nowrap">
                                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                        PAID
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-right whitespace-nowrap">
                                                    <a
                                                        href={`/wallet/invoice/${txn.invoice ? txn.invoice.id : txn.id}`}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg text-xs font-semibold text-amber-400 transition-colors"
                                                        title="Download Official VAT Invoice PDF"
                                                    >
                                                        <Download className="w-3 h-3" />
                                                        <span>Invoice (PDF)</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-10 text-center space-y-3">
                            <FileText className="w-8 h-8 text-slate-600 mx-auto" />
                            <h4 className="text-sm font-bold text-white">No Transactions Yet</h4>
                            <p className="text-xs text-slate-400 max-w-sm mx-auto">
                                Once you top up your balance or convene a board session, all financial logs and VAT invoices will be available here.
                            </p>
                            <button
                                onClick={() => setIsTopUpOpen(true)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                                <span>Make First Top-Up</span>
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {/* TopUp Modal */}
            <TopUpModal 
                isOpen={isTopUpOpen} 
                onClose={() => setIsTopUpOpen(false)} 
                defaultAmount={499}
            />
        </ExecutiveLayout>
    );
}
