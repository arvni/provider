<?php

namespace App\Interfaces;

use App\Models\OrderMaterial;
use App\Models\User;

interface OrderMaterialRepositoryInterface
{
    public function getAllOrderMaterials(array $queryData = []);
    public function getUserOrderMaterials(User $user,array $queryData = []);

    public function getOrderMaterialById(OrderMaterial $orderMaterial): OrderMaterial;

    public function deleteOrderMaterial(OrderMaterial $orderMaterial): ?bool;

    public function createOrderMaterial(array $orderMaterialDetails): OrderMaterial;

    public function updateOrderMaterial(OrderMaterial $orderMaterial, array $newDetails);

}
