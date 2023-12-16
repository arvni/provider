<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderMaterialResource;
use App\Interfaces\OrderMaterialRepositoryInterface;
use App\Models\OrderMaterial;
use App\Http\Requests\StoreOrderMaterialRequest;
use App\Http\Requests\UpdateOrderMaterialRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderMaterialController extends Controller
{
    protected OrderMaterialRepositoryInterface $orderMaterialRepository;

    public function __construct(OrderMaterialRepositoryInterface $orderMaterialRepository)
    {
        $this->orderMaterialRepository = $orderMaterialRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orderMaterials = $this->orderMaterialRepository->getUserOrderMaterials(auth()->user(), $request->all());
        return Inertia::render("OrderMaterial/Index", ["orderMaterials" => $orderMaterials, "request" => $request->all()]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderMaterialRequest $request)
    {
        $this->orderMaterialRepository->createOrderMaterial($request->all());
        return redirect()->route("consents.index")->with(["status" => __("messages.successfullyAdded", ["type" => "OrderMaterial", "title" => $request->get("name")])]);
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderMaterial $orderMaterial)
    {
        return new OrderMaterialResource($orderMaterial);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderMaterialRequest $request, OrderMaterial $orderMaterial)
    {
        $this->orderMaterialRepository->updateOrderMaterial($orderMaterial, $request->all());
        return redirect()->route("consents.index")->with(["status" => __("messages.successfullyUpdated", ["type" => "OrderMaterial", "title" => $request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderMaterial $orderMaterial)
    {
        $title = $orderMaterial->name;
        $this->orderMaterialRepository->deleteOrderMaterial($orderMaterial);
        return response()->json()->setStatusCode(204);
    }
}
