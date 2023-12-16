<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symptom extends Model
{
    use HasFactory, Searchable;
    protected $fillable = [
        "name",
        "hpo",
        "disabled",
        "ultrasound",
        "family_history"
    ];
    public function SymptomGroup()
    {
        return $this->belongsTo(SymptomGroup::class);
    }

    public function Tests()
    {
        return $this->belongsToMany(Test::class);
    }
}
