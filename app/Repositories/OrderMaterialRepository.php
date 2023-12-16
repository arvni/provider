<?php

namespace App\Repositories;

use App\Interfaces\OrderMaterialRepositoryInterface;
use App\Models\OrderMaterial;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class OrderMaterialRepository implements OrderMaterialRepositoryInterface
{
    private OrderMaterial $orderMaterial;
    private $query;

    public function __construct(OrderMaterial $orderMaterial)
    {
        $this->orderMaterial = $orderMaterial;
        $this->query = $orderMaterial->newQuery();
    }

    /**
     * Retrieve all orderMaterials based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllOrderMaterials($queryData = []): LengthAwarePaginator
    {
        $query = $this->query
            ->withAggregate("User", "name");

        if (isset($queryData['filter'])) {
            $this->applyFilters($query, $queryData['filter']);
        }

        if (isset($queryData['orderMaterialBy'])) {
            $this->applyOrderMaterialBy($query, $queryData['orderMaterialBy']);
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
    private function applyFilters($query, array $filters): void
    {
        if (isset($filters['id'])) {
            $query->where('orderMaterials.id', 'like', '%' . $filters['id'] . '%');
        }

        if (isset($filters['patient_full_name'])) {
            $query->where('user_name', 'like', '%' . $filters['user_name'] . '%');
        }
    }

    /**
     * Apply the orderMaterial by clause to the query.
     *
     * @param  $query
     * @param array $orderMaterialBy
     * @return void
     */
    private function applyOrderMaterialBy($query, array $orderMaterialBy): void
    {
        $field = $orderMaterialBy['field'];
        $type = $orderMaterialBy['type'];

        $query->orderMaterialBy($field, $type);
    }

    /**
     * Get an orderMaterial by its ID.
     *
     * @param OrderMaterial $orderMaterial
     * @return OrderMaterial
     */
    public function getOrderMaterialById(OrderMaterial $orderMaterial): OrderMaterial
    {
        return $orderMaterial;
    }

    /**
     * Delete an orderMaterial.
     *
     * @param OrderMaterial $orderMaterial
     * @return bool|null
     */
    public function deleteOrderMaterial(OrderMaterial $orderMaterial): ?bool
    {
        return $orderMaterial->delete();
    }

    /**
     * Create a new orderMaterial.
     *
     * @param array $orderMaterialDetails
     * @return OrderMaterial
     */
    public function createOrderMaterial(array $orderMaterialDetails): OrderMaterial
    {
        return auth()->user()->OrderMaterials()->save(new $this->orderMaterial($orderMaterialDetails));
    }

    /**
     * Update an orderMaterial with new details.
     *
     * @param OrderMaterial $orderMaterial
     * @param array $newDetails
     * @return bool
     */
    public function updateOrderMaterial(OrderMaterial $orderMaterial, array $newDetails)
    {
        $orderMaterial->fill([
            ...$newDetails,
        ]);
        return $orderMaterial->save();
    }


    public function getUserOrderMaterials(User $user, array $queryData = [])
    {
        $this->query = $user->OrderMaterials();
        return $this->getAllOrderMaterials($queryData);
    }
}
