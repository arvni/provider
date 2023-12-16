<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory,Searchable;

    protected $fillable = [
        "name",
        "code",
        "shortName",
        "description",
        "turnaroundTime",
        "requirements",
    ];

    protected $casts = [
        "requirements" => "json"
    ];

    public function SampleTypes()
    {
        return $this->belongsToMany(SampleType::class)->withPivot("id","description");
    }
}
