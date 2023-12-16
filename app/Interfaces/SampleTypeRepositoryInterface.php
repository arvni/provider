<?php

namespace App\Interfaces;

use App\Models\SampleType;
use Illuminate\Database\Eloquent\Collection;

interface SampleTypeRepositoryInterface
{
    public function getAllSampleTypes(array $queryData = []);

    public function getSampleTypeById(SampleType $sampleType): SampleType;

    public function deleteSampleType(SampleType $sampleType): ?bool;

    public function createSampleType(array $sampleTypeDetails): SampleType;

    public function updateSampleType(SampleType $sampleType, array $newDetails);
}
