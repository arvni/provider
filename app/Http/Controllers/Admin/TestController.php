<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestStoreRequest;
use App\Http\Requests\TestUpdateRequest;
use App\Interfaces\TestRepositoryInterface;
use App\Models\SampleType;
use App\Models\Test;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function __construct(private TestRepositoryInterface $testRepository)
    {
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $tests = $this->testRepository->getAllTests($request->all());
        return Inertia::render("Admin/Test/Index", ["tests" => $tests]);
    }

    /**
     * create a newly created resource in storage.
     * @return Response
     */
    public function create()
    {
        return Inertia::render("Admin/Test/Add");
    }

    /**
     * Store a newly created resource in storage.
     * @param TestStoreRequest $request
     * @return RedirectResponse
     */
    public function store(TestStoreRequest $request)
    {
        $testDetails = $request->all();
        $test = $this->testRepository->createTest($testDetails);
        return redirect()->route("admin.tests.index")->with(["status" => "Test $test->name Successfully Added"]);
    }


    public function edit(Test $test)
    {
        $sampleTypes = SampleType::select("name", "id")->get();
        $test = $test->load("sampleTypes:id,name")->toArray();
        $test["sample_types"] = array_map(fn($sampleType) => [
            "name" => $sampleType["name"],
            "id" => $sampleType["id"],
            "description" => optional($sampleType["pivot"])["description"]], $test["sample_types"]);
        return Inertia::render("Admin/Test/Edit", ["test" => $test, "sampleTypes" => $sampleTypes]);
    }


    /**
     * Update the specified resource in storage.
     * @param TestUpdateRequest $request
     * @param Test $test
     * @return RedirectResponse
     */
    public function update(TestUpdateRequest $request, Test $test)
    {
        $this->testRepository->updateTest($test, $request->all());
        return redirect()->route("admin.tests.index")->with(["status" => "Test Details Successfully Update"]);
    }

    /**
     * Remove the specified resource from storage.
     * @param Test $test
     * @return RedirectResponse
     */
    public function destroy(Test $test): RedirectResponse
    {
        $title = $test->name;
        $this->testRepository->deleteTest($test);
        return redirect()->back()->with(["status" => "$title Test Successfully Deleted"]);
    }
}
