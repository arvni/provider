<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SymptomGroup extends Model
{
    use HasFactory, Searchable;

    protected $fillable = [
        "name"
    ];

    public function Symptoms()
    {
        return $this->hasMany(Symptom::class);
    }
}
