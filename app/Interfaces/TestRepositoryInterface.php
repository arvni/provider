<?php

namespace App\Interfaces;

use App\Models\Test;
use Illuminate\Database\Eloquent\Collection;

interface TestRepositoryInterface
{
    public function getAllTests(array $queryData = []);

    public function getTestById(Test $test): Test;

    public function deleteTest(Test $test): ?bool;

    public function createTest(array $testDetails): Test;

    public function updateTest(Test $test, array $newDetails);
}
