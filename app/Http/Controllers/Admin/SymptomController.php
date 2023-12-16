<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSymptomRequest;
use App\Http\Requests\UpdateSymptomRequest;
use App\Http\Resources\SymptomResource;
use App\Interfaces\SymptomRepositoryInterface;
use App\Models\Symptom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SymptomController extends Controller
{
    protected SymptomRepositoryInterface $symptomRepository;
    public function __construct(SymptomRepositoryInterface $symptomRepository)
    {
        $this->symptomRepository=$symptomRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $symptoms=$this->symptomRepository->getAllSymptoms($request->all());
        return Inertia::render("Admin/Symptom/Index",["symptoms"=>$symptoms,"request"=>$request->all()]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSymptomRequest $request)
    {
        $this->symptomRepository->createSymptom($request->all());
        return redirect()->route("symptoms.index")->with(["status"=>__("messages.successfullyAdded",["type"=>"Symptom","title"=>$request->get("name")])]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Symptom $symptom)
    {
        return new SymptomResource($this->symptomRepository->showSymptom($symptom));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSymptomRequest $request, Symptom $symptom)
    {
        $this->symptomRepository->updateSymptom($symptom,$request->all());
        return redirect()->route("symptoms.index")->with(["status"=>__("messages.successfullyUpdated",["type"=>"Symptom","title"=>$request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Symptom $symptom)
    {
        $title=$symptom->name;
        $this->symptomRepository->deleteSymptom($symptom);
        return response()->json()->setStatusCode(204);
    }
}
