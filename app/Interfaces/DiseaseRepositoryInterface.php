<?php

namespace App\Interfaces;

use App\Models\Disease;
use Illuminate\Database\Eloquent\Collection;

interface DiseaseRepositoryInterface
{
    public function getAllDiseases(array $queryData = []);

    public function getDiseaseById(Disease $disease): Disease;

    public function deleteDisease(Disease $disease): ?bool;

    public function createDisease(array $diseaseDetails): Disease;

    public function updateDisease(Disease $disease, array $newDetails);
}
