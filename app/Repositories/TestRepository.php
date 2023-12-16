<?php

namespace App\Repositories;

use App\Interfaces\TestRepositoryInterface;
use App\Models\Test;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class TestRepository implements TestRepositoryInterface
{
    private Test $test;
    private Builder $query;

    public function __construct(Test $test)
    {
        $this->test = $test;
        $this->query = $test->newQuery()->with("SampleTypes");
    }

    /**
     * Retrieve all tests based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllTests(array $queryData = []): LengthAwarePaginator
    {
        $query = $this->query;

        if (isset($queryData['filter'])) {
            $this->applyFilters($query, $queryData['filter']);
        }

        if (isset($queryData['orderBy'])) {
            $this->applyOrderBy($query, $queryData['orderBy']);
        }

        $pageSize = $queryData['pageSize'] ?? 10;
        return $query->paginate($pageSize);
    }

    /**
     * Apply filters to the query.
     *
     * @param Builder $query
     * @param array $filters
     * @return void
     */
    private function applyFilters(Builder $query, array $filters): void
    {
        if (isset($filters['id'])) {
            $query->search($filters['id'], "id");
        }

        if (isset($filters['code'])) {
            $query->search($filters['code'], "code");
        }

        if (isset($filters['shortName'])) {
            $query->search($filters['shortName'], "shortName");
        }
        if (isset($filters['testName'])) {
            $query->search($filters["testName"]);
        }
        if (isset($filters["search"])) {
            $query->where('tests.name', 'like', '%' . $filters['search'] . '%');
        }
        if (isset($filters["type"])) {
            switch ($filters["type"]) {
                case "test":
                    $query->search($filters["search"]);
                    break;

            }
        }
    }

    /**
     * Apply the order by clause to the query.
     *
     * @param Builder $query
     * @param array $orderBy
     * @return void
     */
    private function applyOrderBy($query, array $orderBy): void
    {
        $field = $orderBy['field'];
        $type = $orderBy['type'];

        $query->orderBy($field, $type);
    }

    /**
     * Get an test by its ID.
     *
     * @param Test $test
     * @return Test
     */
    public function getTestById(Test $test): Test
    {
        return $test;
    }

    /**
     * Delete an test.
     *
     * @param Test $test
     * @return bool|null
     */
    public function deleteTest(Test $test): ?bool
    {
        return $test->delete();
    }

    /**
     * Create a new test.
     *
     * @param array $testDetails
     * @return Test
     */
    public function createTest(array $testDetails): Test
    {
        $test = $this->query->create($testDetails);
        $this->syncSampleTypes($test, $testDetails["sample_types"]);
        return $test;
    }

    /**
     * Update a test with new details.
     *
     * @param Test $test
     * @param array $newDetails
     * @return Test
     */
    public function updateTest(Test $test, array $newDetails)
    {
        $test->update([...$newDetails]);
        $this->syncSampleTypes($test, $newDetails["sample_types"]);
        return $test;
    }

    protected function syncSampleTypes(Test $test, array $sample_types)
    {

        $sampleTypes = [];
        foreach ($sample_types as $sampleType){
            $sampleTypes[$sampleType["id"]] = ["id" => Str::uuid()->toString(), "description" => $sampleType["description"]];
        }
        $test->SampleTypes()->sync($sampleTypes);
    }
}
