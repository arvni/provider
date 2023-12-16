<?php

namespace App\Repositories;

use App\Interfaces\SampleTypeRepositoryInterface;
use App\Models\SampleType;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class SampleTypeRepository implements SampleTypeRepositoryInterface
{
    private SampleType $sampleType;
    private Builder $query;

    public function __construct(SampleType $sampleType)
    {
        $this->sampleType = $sampleType;
        $this->query = $sampleType->newQuery();
    }

    /**
     * Retrieve all sampleTypes based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllSampleTypes(array $queryData = [])
    {
        $query = $this->query;

        if (isset($queryData['filter'])) {
            $this->applyFilters($query, $queryData['filter']);
        }

        if (isset($queryData['orderBy'])) {
            $this->applyOrderBy($query, $queryData['orderBy']);
        }

        $pageSize = $queryData['pageSize'] ?? 100;
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
            $query->search($filters["id"],"id");
        }
        if (isset($filters['sampleTypeName'])) {
            $query->search($filters["sampleTypeName"]);
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
     * Get an sampleType by its ID.
     *
     * @param SampleType $sampleType
     * @return SampleType
     */
    public function getSampleTypeById(SampleType $sampleType): SampleType
    {
        return $sampleType;
    }

    /**
     * Delete an sampleType.
     *
     * @param SampleType $sampleType
     * @return bool|null
     */
    public function deleteSampleType(SampleType $sampleType): ?bool
    {
        return $sampleType->delete();
    }

    /**
     * Create a new sampleType.
     *
     * @param array $sampleTypeDetails
     * @return SampleType
     */
    public function createSampleType(array $sampleTypeDetails): SampleType
    {

        return $this->sampleType->create($sampleTypeDetails);
    }

    /**
     * Update a sampleType with new details.
     *
     * @param SampleType $sampleType
     * @param array $newDetails
     * @return SampleType
     */
    public function updateSampleType(SampleType $sampleType, array $newDetails)
    {
        $sampleType->fill($newDetails);
        if ($sampleType->isDirty())
            $sampleType->save();
        return  $sampleType;
    }
}
