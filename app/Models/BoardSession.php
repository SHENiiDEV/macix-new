<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BoardSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tier',
        'title',
        'brief_text',
        'company_context',
        'custom_advisors',
        'cost_eur',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'custom_advisors' => 'array',
            'cost_eur' => 'decimal:2',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function resolution(): HasOne
    {
        return $this->hasOne(BoardResolution::class);
    }
}
