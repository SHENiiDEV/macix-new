<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'company_name' => $request->user()->company_name,
                    'vat_number' => $request->user()->vat_number,
                    'billing_address' => $request->user()->billing_address,
                    'wallet_balance' => (float) $request->user()->wallet_balance,
                    'is_admin' => (bool) $request->user()->is_admin,
                ] : null,
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'company' => [
                'name' => env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD'),
                'number' => env('COMPANY_NUMBER', '16107295'),
                'address' => env('COMPANY_ADDRESS', '14 Broadway, Nottingham, United Kingdom, NG1 1PS'),
                'email' => config('mail.from.address', env('MAIL_FROM_ADDRESS', 'support@fitninja.co.uk')),
                'sla' => env('SUPPORT_SLA', '24-48 hours'),
                'vat_note' => 'Reverse Charge / 0% VAT applicable for B2B cross-border services.',
            ],
        ];
    }
}
