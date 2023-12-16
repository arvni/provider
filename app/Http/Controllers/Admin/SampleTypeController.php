<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSampleTypeRequest;
use App\Http\Requests\UpdateSampleTypeRequest;
use App\Http\Resources\SampleTypeResource;
use App\Interfaces\SampleTypeRepositoryInterface;
use App\Models\SampleType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SampleTypeController extends Controller
{
    private SampleTypeRepositoryInterface $sampleTypeRepository;

    public function __construct(SampleTypeRepositoryInterface $sampleTypeRepository)
    {
        $this->sampleTypeRepository = $sampleTypeRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $sampleTypes = $this->sampleTypeRepository->getAllSampleTypes($request->all());
        return Inertia::render("Admin/SampleType/Index", ["sampleTypes" => $sampleTypes, "request" => $request->all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSampleTypeRequest $request)
    {
        $this->sampleTypeRepository->createSampleType($request->all());
        return redirect()->back()->with(["status" => __("messages.successfullyAdded", ["type" => "Sample Type", "title" => $request->get("name")])]);
    }

    /**
     * Display the specified resource.
     */
    public function show(SampleType $sampleType)
    {
        return new SampleTypeResource($sampleType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSampleTypeRequest $request, SampleType $sampleType)
    {
        $this->sampleTypeRepository->updateSampleType($sampleType, $request->all());
        return redirect()->back()->with(["status" => __("messages.successfullyUpdated", ["type" => "Sample Type", "title" => $request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SampleType $sampleType)
    {
        $this->sampleTypeRepository->deleteSampleType($sampleType);
        return response()->json()->setStatusCode(204);
    }
}
