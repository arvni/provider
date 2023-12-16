<?php

namespace App\Interfaces;

use App\Models\Symptom;
use Illuminate\Database\Eloquent\Collection;

interface SymptomRepositoryInterface
{
    public function getAllSymptoms(array $queryData = []);

    public function getSymptomById(Symptom $symptom): Symptom;
    public function showSymptom(Symptom $symptom): Symptom;

    public function deleteSymptom(Symptom $symptom): ?bool;

    public function createSymptom(array $symptomDetails): Symptom;

    public function updateSymptom(Symptom $symptom, array $newDetails);
}
