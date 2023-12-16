<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStep;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Interfaces\OrderRepositoryInterface;
use App\Models\Consent;
use App\Models\Order;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\SampleType;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    private OrderRepositoryInterface $orderRepository;

    public function __construct(OrderRepositoryInterface $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $orders = $this->orderRepository->getAllOrders($request->all());
        return Inertia::render("Admin/Order/Index", [
            "orders" => OrderResource::collection($orders),
            "request" => $request->all(),
            "disableCreate" => true
        ]);
    }
}
