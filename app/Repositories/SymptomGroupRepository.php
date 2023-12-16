<?php

namespace App\Repositories;

use App\Interfaces\SymptomGroupRepositoryInterface;
use App\Models\SymptomGroup;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class SymptomGroupRepository implements SymptomGroupRepositoryInterface
{
    private SymptomGroup $symptomGroup;
    private Builder $query;

    public function __construct(SymptomGroup $symptomGroup)
    {
        $this->symptomGroup = $symptomGroup;
        $this->query=$symptomGroup->newQuery();
    }

    /**
     * Retrieve all symptomGroups based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllSymptomGroups(array $queryData = []): LengthAwarePaginator
    {
        $query = $this->query->withCount("Symptoms");

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
        if (isset($filters["symptomGroupName"])){
            $query->search($filters["symptomGroupName"],"name");
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
     * Get an symptomGroup by its ID.
     *
     * @param SymptomGroup $symptomGroup
     * @return SymptomGroup
     */
    public function getSymptomGroupById(SymptomGroup $symptomGroup): SymptomGroup
    {
        return $symptomGroup;
    }

    /**
     * Delete an symptomGroup.
     *
     * @param SymptomGroup $symptomGroup
     * @return bool|null
     */
    public function deleteSymptomGroup(SymptomGroup $symptomGroup): ?bool
    {
        return $symptomGroup->delete();
    }

    /**
     * Create a new symptomGroup.
     *
     * @param array $symptomGroupDetails
     * @return SymptomGroup
     */
    public function createSymptomGroup(array $symptomGroupDetails): SymptomGroup
    {

        return $this->symptomGroup->create($symptomGroupDetails);
    }

    /**
     * Update a symptomGroup with new details.
     *
     * @param SymptomGroup $symptomGroup
     * @param array $newDetails
     * @return bool
     */
    public function updateSymptomGroup(SymptomGroup $symptomGroup, array $newDetails)
    {
        $user = User::find($newDetails['user']['id']);

        $symptomGroup->name = $newDetails['name'];

        return $user->symptomGroups()->save($symptomGroup);
    }
}
