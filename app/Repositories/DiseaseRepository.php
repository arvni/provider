<?php

namespace App\Repositories;

use App\Interfaces\DiseaseRepositoryInterface;
use App\Models\Disease;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class DiseaseRepository implements DiseaseRepositoryInterface
{
    private Disease $disease;

    public function __construct(Disease $disease)
    {
        $this->disease = $disease;
    }

    /**
     * Retrieve all diseases based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllDiseases(array $queryData = []): LengthAwarePaginator
    {
        $query = $this->disease;

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
            $query->where('diseases.id', 'like', '%' . $filters['id'] . '%');
        }

        if (isset($filters['diseaseName'])) {
            $query->where('diseases.name', 'like', '%' . $filters['diseaseName'] . '%');
        }

        if (isset($filters['userName'])) {
            $query->where('users.name', 'like', '%' . $filters['userName'] . '%');
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
     * Get an disease by its ID.
     *
     * @param Disease $disease
     * @return Disease
     */
    public function getDiseaseById(Disease $disease): Disease
    {
        return $disease;
    }

    /**
     * Delete an disease.
     *
     * @param Disease $disease
     * @return bool|null
     */
    public function deleteDisease(Disease $disease): ?bool
    {
        return $disease->delete();
    }

    /**
     * Create a new disease.
     *
     * @param array $diseaseDetails
     * @return Disease
     */
    public function createDisease(array $diseaseDetails): Disease
    {

        return $this->disease->create($diseaseDetails);
    }

    /**
     * Update a disease with new details.
     *
     * @param Disease $disease
     * @param array $newDetails
     * @return bool
     */
    public function updateDisease(Disease $disease, array $newDetails)
    {
        $user = User::find($newDetails['user']['id']);

        $disease->name = $newDetails['name'];

        return $user->diseases()->save($disease);
    }
}
