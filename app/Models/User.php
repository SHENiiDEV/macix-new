<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'email',
        'password',
        'date_of_birth',
        'company_name',
        'vat_number',
        'address_street',
        'address_city',
        'address_country',
        'address_postcode',
        'billing_address',
        'phone',
        'terms_agreed_at',
        'wallet_balance',
        'is_admin',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'date_of_birth' => 'date',
            'terms_agreed_at' => 'datetime',
            'wallet_balance' => 'decimal:2',
            'is_admin' => 'boolean',
        ];
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class)->latest();
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class)->latest();
    }

    public function boardSessions(): HasMany
    {
        return $this->hasMany(BoardSession::class)->latest();
    }
}
