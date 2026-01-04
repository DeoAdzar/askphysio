<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Specialization extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    /**
     * Get all conditions for this specialization
     */
    public function conditions(): HasMany
    {
        return $this->hasMany(Condition::class);
    }
}