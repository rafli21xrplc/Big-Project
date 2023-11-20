<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class catatan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function tim(): BelongsTo {
        return $this->BelongsTo(Tim::class);
    }
}
