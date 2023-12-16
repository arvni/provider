<?php

namespace App\Models;

use App\Enums\OrderStatus;
use App\Enums\OrderStep;
use App\Traits\Statusable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Order extends Model
{
    use HasFactory, HasUuids, Statusable;

    protected $fillable = [
        "status",
        "step",
        "test_method",
        "clinical_information",
        "sent_at",
        "received_at",
        "reported_at",
    ];
    protected $casts = [
        "status" => OrderStatus::class,
        "step" => OrderStep::class,
        "test_method" => "json",
        "clinical_information" => "json",
    ];

    public function Patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function familyHistoryDocument()
    {
        return $this->morphMany(Document::class, "related")->where("tag", "familyHistoryDocument");
    }

    public function medicalReportsDocument()
    {
        return $this->morphMany(Document::class, "related")->where("tag", "medicalReportsDocument");
    }

    public function pedigreeDocument()
    {
        return $this->morphMany(Document::class, "related")->where("tag", "pedigreeDocument");
    }

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function targetedGeneListDocument()
    {
        return $this->morphMany(Document::class, "related")->where("tag", "targetedGeneListDocument");
    }

    public function otherDocument()
    {
        return $this->morphMany(Document::class, "related")->where("tag", "otherDocument");
    }

    public function Samples()
    {
        return $this->hasMany(Sample::class);
    }

    public function scopePatientIs($query, $field, $value)
    {
        $query->whereHas("Patient", function ($q) use ($value, $field) {
            $q->where($field, 'like', '%' . $value . '%');
        });
    }

}
