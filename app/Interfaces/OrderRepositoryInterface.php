<?php

namespace App\Interfaces;

use App\Enums\OrderStep;
use App\Models\Order;
use App\Models\User;

interface OrderRepositoryInterface
{
    public function getAllOrders(array $queryData = []);
    public function getUserOrders(User $user,array $queryData = []);

    public function getOrderById(Order $order): Order;

    public function deleteOrder(Order $order): ?bool;

    public function createOrder(array $orderDetails): Order;

    public function updateOrder(Order $order, array $newDetails,OrderStep $step);

    public function updateOrderItems(array $orderItemsDetails, Order $order);

    public function deleteAllOrderItems(Order $order);
}
