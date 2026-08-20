<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Display the Contact Us page
     */
    public function show(): Response
    {
        return Inertia::render('Contact', [
            'company' => [
                'name' => env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD'),
                'number' => env('COMPANY_NUMBER', '16107295'),
                'address' => env('COMPANY_ADDRESS', '14 Broadway, Nottingham, United Kingdom, NG1 1PS'),
                'email' => config('mail.from.address', env('MAIL_FROM_ADDRESS', 'support@fitninja.co.uk')),
                'sla' => env('SUPPORT_SLA', '24-48 hours'),
            ],
        ]);
    }

    /**
     * Handle support ticket / contact form submission
     */
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:150'],
            'subject' => ['required', 'string', 'max:200'],
            'message' => ['required', 'string', 'max:3000'],
        ]);

        $recipient = config('mail.from.address', env('MAIL_FROM_ADDRESS', 'support@fitninja.co.uk'));

        try {
            Mail::to($recipient)->send(new ContactMessageMail($validated));
        } catch (\Throwable $e) {
            Log::warning("Contact form email dispatch failed: " . $e->getMessage());
        }

        return back()->with('success', 'Your message has been securely dispatched to our executive desk. Our support team will review and respond within ' . env('SUPPORT_SLA', '24-48 hours') . '.');
    }

    /**
     * Display the Support & Help Desk page
     */
    public function support(): Response
    {
        return Inertia::render('Support', [
            'company' => [
                'name' => env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD'),
                'number' => env('COMPANY_NUMBER', '16107295'),
                'address' => env('COMPANY_ADDRESS', '14 Broadway, Nottingham, United Kingdom, NG1 1PS'),
                'email' => config('mail.from.address', env('MAIL_FROM_ADDRESS', 'support@fitninja.co.uk')),
                'sla' => env('SUPPORT_SLA', '24-48 hours'),
            ],
        ]);
    }

    /**
     * Display the How It Works guide page
     */
    public function howItWorks(): Response
    {
        return Inertia::render('HowItWorks');
    }

    /**
     * Display the About Us corporate page
     */
    public function about(): Response
    {
        return Inertia::render('About', [
            'company' => [
                'name' => env('COMPANY_NAME', 'CHANGE IT UP SERVICES LTD'),
                'number' => env('COMPANY_NUMBER', '16107295'),
                'address' => env('COMPANY_ADDRESS', '14 Broadway, Nottingham, United Kingdom, NG1 1PS'),
                'email' => config('mail.from.address', env('MAIL_FROM_ADDRESS', 'support@fitninja.co.uk')),
                'sla' => env('SUPPORT_SLA', '24-48 hours'),
            ],
        ]);
    }
}
