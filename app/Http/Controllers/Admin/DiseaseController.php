<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDiseaseRequest;
use App\Http\Requests\UpdateDiseaseRequest;
use App\Http\Resources\DiseaseResource;
use App\Interfaces\DiseaseRepositoryInterface;
use App\Models\Disease;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiseaseController extends Controller
{
    protected $diseaseRepository;
    public function __construct(DiseaseRepositoryInterface $diseaseRepository)
    {
        $this->diseaseRepository=$diseaseRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $diseases=$this->diseaseRepository->getAllDiseases($request->all());
        return Inertia::render("Admin/Disease/Index",["diseases"=>$diseases,"request"=>$request->all()]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDiseaseRequest $request)
    {
        $this->diseaseRepository->createDisease($request->all());
        return redirect()->route("consents.index")->with(["status"=>__("messages.successfullyAdded",["type"=>"Disease","title"=>$request->get("name")])]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Disease $disease)
    {
        return new DiseaseResource($disease);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDiseaseRequest $request, Disease $disease)
    {
        $this->diseaseRepository->updateDisease($disease,$request->all());
        return redirect()->route("consents.index")->with(["status"=>__("messages.successfullyUpdated",["type"=>"Disease","title"=>$request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Disease $disease)
    {
        $title=$disease->name;
        $this->diseaseRepository->deleteDisease($disease);
        return response()->json()->setStatusCode(204);
    }
}
