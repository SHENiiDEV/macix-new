import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { ShieldCheck, AlertCircle, Building2, Mail, CreditCard } from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';

export default function Refund() {
    const { company } = usePage().props;

    return (
        <ExecutiveLayout>
            <Head title={`B2B Refund Policy — Macix AI (${company?.name || 'INCHWARD LIMITED'})`} />

            <div className="max-w-4xl mx-auto space-y-8 my-6">
                
                {/* Header */}
                <div className="border-b border-slate-800 pb-6">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Commercial Terms &amp; Settlement</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">
                        B2B Refund &amp; Cancellation Policy
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">
                        Operating Entity: <strong>{company?.name || 'INCHWARD LIMITED'}</strong> &bull; Company No. {company?.number || '16021412'} &bull; United Kingdom
                    </p>
                </div>

                {/* Core Policy Rule Alert Box */}
                <div className="p-6 bg-slate-900 border border-amber-500/40 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                        <CreditCard className="w-5 h-5" />
                        <span>Prepaid Wallet Balance vs. Conducted Sessions Policy</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
                        <p>
                            <strong>14-Day Guarantee on Unused Wallet Funds:</strong> Clients may request a 100% refund of any unspent, positive balance remaining in their Macix AI Prepaid Wallet within fourteen (14) calendar days of the original top-up transaction.
                        </p>
                        <p className="text-amber-300/90 font-semibold">
                            <strong>Non-Refundability of Conducted Board Sessions:</strong> Once a Boardroom deliberation has been convened ("Convene the Board" triggered) and funds have been debited for a Starter (€149), Pro (€499), or Enterprise (€1,499) session, the fee is <u>strictly non-refundable</u>. AI compute orchestration, multi-avatar synthesis, and official PDF minutes generation are instantaneous digital services irrevocably delivered upon execution.
                        </p>
                    </div>
                </div>

                {/* Body Content */}
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    
                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">1. Commercial Context &amp; High-Ticket B2B Transactions</h2>
                        <p>
                            Macix AI provides high-ticket, enterprise-level digital advisory intelligence to businesses and commercial entities. By funding a wallet balance or initiating a board deliberation session, the Client acknowledges and agrees that the services are B2B in nature and not subject to consumer cooling-off periods once execution begins.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">2. Process for Requesting an Unused Balance Refund</h2>
                        <p>
                            To claim a refund for unspent wallet credits within the 14-day window:
                        </p>
                        <ol className="list-decimal pl-5 space-y-1.5 text-slate-400">
                            <li>Send an email from your registered account email to <a href="mailto:info@macix.co.uk" className="text-amber-400 hover:underline">info@macix.co.uk</a>.</li>
                            <li>Include the Invoice Number (e.g. <code>INV-2026-XXXXX</code>) and Transaction Reference (<code>TXN-2026-XXXXX</code>).</li>
                            <li>Our corporate accounting desk at DRAYBOND LIMITED will verify the unspent balance and issue a credit reversal to the original payment source within 3-5 business days.</li>
                        </ol>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">3. Chargebacks and Billing Disputes</h2>
                        <p>
                            The prepaid wallet architecture is specifically engineered to provide transparent transaction verification. In the event of an unjustified chargeback initiated without prior communication with our executive desk, DRAYBOND LIMITED reserves the right to suspend platform access, produce official cryptographic server logs and stamped PDF invoices to the payment processor, and recover associated legal and administrative recovery expenses under UK law.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">4. Corporate Contact &amp; Governance</h2>
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 space-y-1">
                            <div><strong>Company:</strong> DRAYBOND LIMITED (Company No. 16021806)</div>
                            <div><strong>Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</div>
                            <div><strong>Billing &amp; Refund Desk:</strong> info@macix.co.uk</div>
                        </div>
                    </section>

                </div>

            </div>
        </ExecutiveLayout>
    );
}
