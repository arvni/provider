<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSymptomGroupRequest;
use App\Http\Requests\UpdateSymptomGroupRequest;
use App\Http\Resources\SymptomGroupResource;
use App\Interfaces\SymptomGroupRepositoryInterface;
use App\Models\SymptomGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SymptomGroupController extends Controller
{
    protected SymptomGroupRepositoryInterface $symptomGroupRepository;
    public function __construct(SymptomGroupRepositoryInterface $symptomGroupRepository)
    {
        $this->symptomGroupRepository=$symptomGroupRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $symptomGroups=$this->symptomGroupRepository->getAllSymptomGroups($request->all());
        return Inertia::render("Admin/SymptomGroup/Index",["symptomGroups"=>$symptomGroups,"request"=>$request->all()]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSymptomGroupRequest $request)
    {
        $this->symptomGroupRepository->createSymptomGroup($request->all());
        return redirect()->route("admin.symptom-groups.index")->with(["status"=>__("messages.successfullyAdded",["type"=>"SymptomGroup","title"=>$request->get("name")])]);
    }

    /**
     * Display the specified resource.
     */
    public function show(SymptomGroup $symptomGroup)
    {
        return new SymptomGroupResource($symptomGroup);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSymptomGroupRequest $request, SymptomGroup $symptomGroup)
    {
        $this->symptomGroupRepository->updateSymptomGroup($symptomGroup,$request->all());
        return redirect()->route("admin.symptom-groups.index")->with(["status"=>__("messages.successfullyUpdated",["type"=>"SymptomGroup","title"=>$request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SymptomGroup $symptomGroup)
    {
        $title=$symptomGroup->name;
        $this->symptomGroupRepository->deleteSymptomGroup($symptomGroup);
        return response()->json()->setStatusCode(204);
    }
}
