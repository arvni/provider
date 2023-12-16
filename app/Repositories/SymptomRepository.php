<?php

namespace App\Repositories;

use App\Interfaces\SymptomRepositoryInterface;
use App\Models\Symptom;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

class SymptomRepository implements SymptomRepositoryInterface
{
    private Symptom $symptom;
    private Builder $query;

    public function __construct(Symptom $symptom)
    {
        $this->symptom = $symptom;
        $this->query = $symptom->newQuery();
    }

    /**
     * Retrieve all symptoms based on the provided query data.
     *
     * @param array $queryData
     *
     */
    public function getAllSymptoms(array $queryData = [])
    {
        $query = $this->query->withAggregate("SymptomGroup", "name");

        if (isset($queryData['filter'])) {
            $this->applyFilters($query, $queryData['filter']);
        }

        if (isset($queryData['orderBy'])) {
            $this->applyOrderBy($query, $queryData['orderBy']);
        }
        return $query->paginate($queryData["pageSize"] ?? 100);
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
        if (isset($filters['hpo'])) {
            $query->search($filters['hpo'], "hpo");
        }
        if (isset($filters['symptomName'])) {
            $query->search($filters['symptomName']);
        }
        if (isset($filters['symptom_group_name'])) {
            $query->search($filters['symptom_group_name'], "name", "symptom_groups");
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
     * Get a symptom by its ID.
     *
     * @param Symptom $symptom
     * @return Symptom
     */
    public function getSymptomById(Symptom $symptom): Symptom
    {
        return $symptom;
    }

    /**
     * Delete an symptom.
     *
     * @param Symptom $symptom
     * @return bool|null
     */
    public function deleteSymptom(Symptom $symptom): ?bool
    {
        return $symptom->delete();
    }

    /**
     * Create a new symptom.
     *
     * @param array $symptomDetails
     * @return Symptom
     */
    public function createSymptom(array $symptomDetails): Symptom
    {

        return $this->symptom->create($symptomDetails);
    }

    /**
     * Update a symptom with new details.
     *
     * @param Symptom $symptom
     * @param array $newDetails
     * @return bool
     */
    public function updateSymptom(Symptom $symptom, array $newDetails)
    {
        $user = User::find($newDetails['user']['id']);

        $symptom->name = $newDetails['name'];

        return $user->symptoms()->save($symptom);
    }

    public function showSymptom(Symptom $symptom): Symptom
    {
        return $symptom->load("SymptomGroup:name,id");
    }
}
