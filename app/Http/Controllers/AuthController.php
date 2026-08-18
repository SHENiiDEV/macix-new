<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function showLogin(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function showRegister(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard')->with('success', 'Welcome back to the Boardroom.');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our executive records.',
        ])->onlyInput('email');
    }

    public function register(Request $request)
    {
        $excludedCountries = [
            'Sudan', 'Dem. Rep. of the Congo', 'Democratic Republic of the Congo',
            'Iran', 'Mali', 'Myanmar', 'Myanmar (Burma)',
            'North Korea', "Democratic People's Republic of Korea", 'South Sudan',
            'Syria', 'Syrian Arab Republic', 'Yemen', 'Afghanistan',
            'Belarus', 'Central African Republic', 'Cuba', 'Haiti',
            'Iraq', 'Russia', 'Russian Federation', 'Somalia', 'Venezuela', 'Zimbabwe'
        ];

        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'phone' => ['required', 'string', 'max:50'],
            'date_of_birth' => ['required', 'date', 'before:today'],
            'address_street' => ['required', 'string', 'max:255'],
            'address_city' => ['required', 'string', 'max:255'],
            'address_country' => ['required', 'string', 'max:255', function ($attribute, $value, $fail) use ($excludedCountries) {
                if (in_array(trim($value), $excludedCountries, true)) {
                    $fail("Registrations from {$value} are currently restricted under UK export compliance.");
                }
            }],
            'address_postcode' => ['required', 'string', 'max:50'],
            'terms' => ['accepted'],
            'company_name' => ['nullable', 'string', 'max:255'],
            'vat_number' => ['nullable', 'string', 'max:50'],
        ], [
            'terms.accepted' => 'You must agree to the Terms & Conditions and Privacy Policy to create an account.',
        ]);

        $fullName = trim($validated['first_name'] . ' ' . $validated['last_name']);
        $billingAddress = implode(', ', array_filter([
            $validated['address_street'],
            $validated['address_city'],
            $validated['address_postcode'],
            $validated['address_country'],
        ]));

        $user = User::create([
            'name' => $fullName,
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'phone' => $validated['phone'],
            'date_of_birth' => $validated['date_of_birth'],
            'address_street' => $validated['address_street'],
            'address_city' => $validated['address_city'],
            'address_country' => $validated['address_country'],
            'address_postcode' => $validated['address_postcode'],
            'billing_address' => $billingAddress,
            'company_name' => $validated['company_name'] ?? null,
            'vat_number' => $validated['vat_number'] ?? null,
            'terms_agreed_at' => now(),
            'wallet_balance' => 0.00,
        ]);

        Auth::login($user);

        // Send Welcome B2B Email
        try {
            Mail::to($user->email)->send(new WelcomeMail($user));
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::warning("Welcome email error: " . $e->getMessage());
        }

        return redirect('/dashboard')->with('success', 'Account created successfully. Welcome to Macix AI.');
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'company_name' => ['nullable', 'string', 'max:255'],
            'vat_number' => ['nullable', 'string', 'max:50'],
            'billing_address' => ['nullable', 'string', 'max:500'],
            'phone' => ['nullable', 'string', 'max:50'],
        ]);

        $user->update($validated);

        return back()->with('success', 'Executive profile and billing details updated.');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('success', 'You have been securely signed out.');
    }
}
