<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{
    use HasFactory,Searchable;
    protected $fillable=[
        "name",
        "gene"
    ];
    protected $casts=[
        "gene"=>"json"
    ];
}
