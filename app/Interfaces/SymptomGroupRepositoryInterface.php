<?php

namespace App\Interfaces;

use App\Models\SymptomGroup;
use Illuminate\Database\Eloquent\Collection;

interface SymptomGroupRepositoryInterface
{
    public function getAllSymptomGroups(array $queryData = []);

    public function getSymptomGroupById(SymptomGroup $symptomGroup): SymptomGroup;

    public function deleteSymptomGroup(SymptomGroup $symptomGroup): ?bool;

    public function createSymptomGroup(array $symptomGroupDetails): SymptomGroup;

    public function updateSymptomGroup(SymptomGroup $symptomGroup, array $newDetails);
}
