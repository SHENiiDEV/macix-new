import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Lock, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';

export default function Privacy() {
    const { company } = usePage().props;

    return (
        <ExecutiveLayout>
            <Head title="Privacy Policy & UK GDPR — Macix AI" />

            <div className="max-w-4xl mx-auto space-y-8 my-6">
                
                {/* Header */}
                <div className="border-b border-slate-800 pb-6">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Lock className="w-4 h-4" />
                        <span>Data Protection &amp; Confidentiality</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">
                        Privacy Policy &amp; UK GDPR Compliance
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">
                        Controller: <strong>DRAYBOND LIMITED</strong> (Company No. 16021806) &bull; United Kingdom
                    </p>
                </div>

                {/* Zero-Training Guarantee Box */}
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                        <ShieldCheck className="w-5 h-5" />
                        <span>Zero Model Training &amp; Executive Isolation Guarantee</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        DRAYBOND LIMITED guarantees that your proprietary founder briefs, financial metrics, cap table arrangements, and internal disputes are <strong>NEVER used to train, fine-tune, or improve</strong> public or third-party AI models. All API communications with enterprise inference endpoints operate strictly with zero data-retention for training purposes.
                    </p>
                </div>

                {/* Body Content */}
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    
                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">1. Data Controller Identification</h2>
                        <p>
                            The data controller responsible for the processing of your personal and corporate data is:
                        </p>
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 space-y-1">
                            <div><strong>Entity:</strong> DRAYBOND LIMITED (Company No. 16021806)</div>
                            <div><strong>Registered Office:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</div>
                            <div><strong>Privacy Desk:</strong> info@macix.co.uk</div>
                        </div>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">2. Categories of Data Processed</h2>
                        <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                            <li><strong>Account &amp; Billing Data:</strong> Executive name, company name, corporate email address, billing address, VAT/Tax ID, transaction histories.</li>
                            <li><strong>Strategic Briefing Data:</strong> Text submissions describing corporate dilemmas, operational bottlenecks, revenue numbers, and organizational context.</li>
                            <li><strong>Generated Minutes &amp; Resolutions:</strong> AI advisor deliberations, synthesized action plans, and exportable PDF minutes.</li>
                            <li><strong>Technical Logs:</strong> IP address, browser type, timestamp logs for security audits and invoice verification.</li>
                        </ul>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">3. Legal Basis for Processing (UK GDPR)</h2>
                        <p>
                            We process your data strictly under the following lawful bases pursuant to Article 6 of the UK GDPR:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-slate-400">
                            <li><strong>Contract Performance:</strong> To deliver board deliberation sessions, generate minutes, and process wallet transactions.</li>
                            <li><strong>Legal Obligation:</strong> To maintain VAT-compliant accounting records and tax invoices under UK HMRC regulations.</li>
                            <li><strong>Legitimate Interests:</strong> To secure platform infrastructure against fraud and unauthorized intrusions.</li>
                        </ul>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-extrabold text-white">4. Data Subject Rights</h2>
                        <p>
                            Under UK GDPR, you have the right to request access to, rectification of, or erasure of your personal data, as well as the right to restrict or object to processing. To exercise any of these rights, contact our Data Protection Officer at <a href="mailto:info@macix.co.uk" className="text-amber-400 hover:underline">info@macix.co.uk</a>.
                        </p>
                    </section>

                </div>

            </div>
        </ExecutiveLayout>
    );
}
