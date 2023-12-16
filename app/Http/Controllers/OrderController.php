<?php

namespace App\Http\Controllers;

use App\Enums\OrderStep;
use App\Http\Resources\OrderResource;
use App\Interfaces\OrderRepositoryInterface;
use App\Models\Consent;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
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
        $orders = $this->orderRepository->getUserOrders(auth()->user(),$request->all());
        return Inertia::render("Order/Index", ["orders" => OrderResource::collection($orders), "request" => $request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Order/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $order = $this->orderRepository->createOrder($request->all());
        return redirect()->route("orders.edit", ["order" => $order, "step" => OrderStep::PATIENT_DETAILS]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order->load(["Patient", "Samples"]);
        return Inertia::render("Order/Show", compact("order"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order, OrderStep $step)
    {

        $data = ["order", "step"];
        if ($step == OrderStep::SAMPLE_DETAILS) {
            $sampleTypes = SampleType::all()
                ->map(fn(SampleType $sampleType) => [
                    "id" => $sampleType->id,
                    "name" => $sampleType->name,
                    "sampleIdRequired" => $sampleType->sample_id_required
                ]);
            $data[] = "sampleTypes";
            $order->load("Samples");
        } elseif ($step == OrderStep::CONSENT_FORM) {
            $consents = Consent::orderBy("order", "asc")->get();
            $data[] = "consents";
        } elseif ($step === OrderStep::PATIENT_DETAILS) {
            $order->load("patient");
        } elseif ($step === OrderStep::FINALIZE) {
            $order->load(["Patient", "Samples"]);
        }
        return Inertia::render("Order/Edit/" . Str::studly($step->value), compact(...$data));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order, OrderStep $step)
    {
        $this->orderRepository->updateOrder($order, $request->all(), $step);
        return redirect()->route($step !== OrderStep::FINALIZE ? "orders.update" : "orders.show", ["order" => $order, "step" => $step->next()]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
