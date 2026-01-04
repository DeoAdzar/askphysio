<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Condition extends Model
{
    protected $fillable = [
        'specialization_id',
        'name',
    ];

    /**
     * Get the specialization that owns the condition
     */
    public function specialization(): BelongsTo
    {
        return $this->belongsTo(Specialization::class);
    }
}