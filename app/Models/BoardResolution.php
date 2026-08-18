<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardResolution extends Model
{
    use HasFactory;

    protected $fillable = [
        'board_session_id',
        'investor_opinion',
        'mentor_opinion',
        'operator_opinion',
        'devil_opinion',
        'chairman_summary',
        'strategic_verdict',
        'consensus_score',
        'risk_score',
        'action_plan',
    ];

    protected function casts(): array
    {
        return [
            'investor_opinion' => 'array',
            'mentor_opinion' => 'array',
            'operator_opinion' => 'array',
            'devil_opinion' => 'array',
            'action_plan' => 'array',
            'consensus_score' => 'integer',
        ];
    }

    public function session(): BelongsTo
    {
        return $this->belongsTo(BoardSession::class, 'board_session_id');
    }
}
