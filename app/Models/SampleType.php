<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SampleType extends Model
{
    use HasFactory, Searchable;

    protected $fillable = [
        "name",
        "sample_id_required"
    ];
    protected $casts = ["sample_id_required" => "boolean"];

    public function Tests()
    {
        return $this->belongsToMany(Test::class);
    }
}
