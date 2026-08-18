<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'transaction_id',
        'invoice_number',
        'customer_name',
        'customer_company',
        'customer_email',
        'customer_vat',
        'customer_address',
        'subtotal_eur',
        'vat_rate_percent',
        'vat_amount_eur',
        'total_eur',
        'service_name',
        'status',
        'issued_at',
        'pdf_path',
    ];

    protected function casts(): array
    {
        return [
            'subtotal_eur' => 'decimal:2',
            'vat_rate_percent' => 'decimal:2',
            'vat_amount_eur' => 'decimal:2',
            'total_eur' => 'decimal:2',
            'issued_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }
}
