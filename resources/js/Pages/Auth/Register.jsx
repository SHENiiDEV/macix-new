import React from 'react';
import { useForm, Head, Link, usePage } from '@inertiajs/react';
import { 
    Lock, 
    Mail, 
    User, 
    Building2, 
    Phone, 
    ArrowRight, 
    ShieldCheck, 
    Crown, 
    Calendar, 
    MapPin, 
    Globe, 
    Hash,
    CheckSquare,
    Square
} from 'lucide-react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';
import { ALLOWED_COUNTRIES } from '../../constants/countries';
import DatePicker from '../../Components/DatePicker';
import Logo from '../../Components/Logo';

export default function Register() {
    const { company } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        date_of_birth: '',
        address_street: '',
        address_city: '',
        address_country: 'United Kingdom',
        address_postcode: '',
        company_name: '',
        vat_number: '',
        terms: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <ExecutiveLayout>
            <Head title="Executive Registration — Macix AI" />

            <div className="max-w-2xl mx-auto my-8">
                <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
                    
                    {/* Title & Badge */}
                    <div className="text-center space-y-3">
                        <div className="flex justify-center">
                            <Logo size="lg" showText={false} href={null} />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Create Executive Account
                        </h1>
                        <p className="text-xs text-slate-400">
                            Enterprise deliberation &amp; B2B advisory suite operated by <strong>{company?.name || 'CHANGE IT UP SERVICES LTD'}</strong>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                        
                        {/* Section: Personal Information */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
                                <User className="w-3.5 h-3.5" />
                                <span>1. Executive Identity</span>
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">First Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        placeholder="Alex"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                    {errors.first_name && <p className="text-rose-400 text-xs mt-1">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">Surname (Last Name) *</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.last_name}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        placeholder="Vance"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                    {errors.last_name && <p className="text-rose-400 text-xs mt-1">{errors.last_name}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">Date of Birth *</label>
                                    <DatePicker
                                        value={data.date_of_birth}
                                        onChange={(val) => setData('date_of_birth', val)}
                                        error={errors.date_of_birth}
                                        placeholder="Select Date of Birth"
                                    />
                                </div>

                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">Phone Number *</label>
                                    <div className="relative">
                                        <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="tel"
                                            required
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="+44 20 7946 0912"
                                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Section: Account & Security */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
                                <Lock className="w-3.5 h-3.5" />
                                <span>2. Corporate Credentials</span>
                            </h3>

                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">Email Address *</label>
                                <div className="relative">
                                    <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="alex@vancecapital.co.uk"
                                        className="w-full pl-9 pr-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                                {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">Password *</label>
                                    <input
                                        type="password"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Min 8 characters"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                    {errors.password && <p className="text-rose-400 text-xs mt-1">{errors.password}</p>}
                                </div>

                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">Confirm Password *</label>
                                    <input
                                        type="password"
                                        required
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="Repeat password"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section: Address Details (Splitted in 4 sections) */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>3. Official Billing Address</span>
                            </h3>

                            {/* 1. Street, house number, apartment... */}
                            <div>
                                <label className="text-slate-300 font-semibold block mb-1.5">
                                    1. Street, House Number, Suite / Apartment *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.address_street}
                                    onChange={(e) => setData('address_street', e.target.value)}
                                    placeholder="e.g. 100 Bishopsgate, Suite 24"
                                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                />
                                {errors.address_street && <p className="text-rose-400 text-xs mt-1">{errors.address_street}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* 2. City */}
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">2. City *</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.address_city}
                                        onChange={(e) => setData('address_city', e.target.value)}
                                        placeholder="London"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                    {errors.address_city && <p className="text-rose-400 text-xs mt-1">{errors.address_city}</p>}
                                </div>

                                {/* 3. Country (Excluding banned jurisdictions) */}
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">3. Country *</label>
                                    <select
                                        required
                                        value={data.address_country}
                                        onChange={(e) => setData('address_country', e.target.value)}
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                                    >
                                        {ALLOWED_COUNTRIES.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address_country && <p className="text-rose-400 text-xs mt-1">{errors.address_country}</p>}
                                </div>

                                {/* 4. Post code */}
                                <div>
                                    <label className="text-slate-300 font-semibold block mb-1.5">4. Post Code *</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.address_postcode}
                                        onChange={(e) => setData('address_postcode', e.target.value)}
                                        placeholder="EC2N 4AG"
                                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white font-mono focus:outline-none focus:border-amber-500 text-xs"
                                    />
                                    {errors.address_postcode && <p className="text-rose-400 text-xs mt-1">{errors.address_postcode}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Optional Company Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div>
                                <label className="text-slate-400 block mb-1">Company Entity Name (Optional)</label>
                                <input
                                    type="text"
                                    value={data.company_name}
                                    onChange={(e) => setData('company_name', e.target.value)}
                                    placeholder="Vance Capital Ltd"
                                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-slate-700"
                                />
                            </div>

                            <div>
                                <label className="text-slate-400 block mb-1">VAT / Tax ID (Optional)</label>
                                <input
                                    type="text"
                                    value={data.vat_number}
                                    onChange={(e) => setData('vat_number', e.target.value)}
                                    placeholder="GB123456789"
                                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-slate-700"
                                />
                            </div>
                        </div>

                        {/* Terms & Privacy Checkbox */}
                        <div className="pt-2">
                            <label className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer">
                                <input
                                    type="checkbox"
                                    required
                                    checked={data.terms}
                                    onChange={(e) => setData('terms', e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                                />
                                <span className="text-xs text-slate-300 leading-normal">
                                    I agree to the{' '}
                                    <Link 
                                        href="/terms" 
                                        target="_blank" 
                                        className="text-amber-400 hover:text-amber-300 font-bold underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                    {' '}and{' '}
                                    <Link 
                                        href="/privacy" 
                                        target="_blank" 
                                        className="text-amber-400 hover:text-amber-300 font-bold underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </span>
                            </label>
                            {errors.terms && <p className="text-rose-400 text-xs mt-1.5">{errors.terms}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
                        >
                            <span>Complete Registration &amp; Convene Board</span>
                            <ArrowRight className="w-4 h-4 stroke-[3]" />
                        </button>

                    </form>

                    <div className="pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
                        <span>Already registered? </span>
                        <Link href="/login" className="text-amber-400 hover:underline font-bold">
                            Sign In to Executive Cockpit
                        </Link>
                    </div>

                </div>
            </div>
        </ExecutiveLayout>
    );
}
