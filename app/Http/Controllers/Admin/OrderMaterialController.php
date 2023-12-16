<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderMaterialResource;
use App\Interfaces\OrderMaterialRepositoryInterface;
use App\Models\OrderMaterial;
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
        $orderMaterials = $this->orderMaterialRepository->getAllOrderMaterials($request->all());
        return Inertia::render("OrderMaterial/Index", [
            "orderMaterials" => $orderMaterials,
            "request" => $request->all(),
            "disableCreate" => true
        ]);

    }
}
