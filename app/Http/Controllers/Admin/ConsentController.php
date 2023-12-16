<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreConsentRequest;
use App\Http\Requests\UpdateConsentRequest;
use App\Http\Resources\ConsentResource;
use App\Interfaces\ConsentRepositoryInterface;
use App\Models\Consent;
use Inertia\Inertia;

class ConsentController extends Controller
{
    protected ConsentRepositoryInterface $consentRepository;
    public function __construct(ConsentRepositoryInterface $consentRepository)
    {
        $this->consentRepository=$consentRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $consents=$this->consentRepository->getAllConsents();
        return Inertia::render("Admin/Consent/Index",compact("consents"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConsentRequest $request)
    {
        $this->consentRepository->createConsent($request->all());
        return redirect()->route("consents.index")->with(["status"=>__("messages.successfullyAdded",["type"=>"Consent","title"=>$request->get("name")])]);
    }

    public function show(Consent $consent)
    {
        return new ConsentResource($consent);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConsentRequest $request, Consent $consent)
    {
        $this->consentRepository->updateConsent($consent,$request->all());
        return redirect()->route("consents.index")->with(["status"=>__("messages.successfullyUpdated",["type"=>"Consent","title"=>$request->get("name")])]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Consent $consent)
    {
        $title=$consent->name;
        $this->consentRepository->deleteConsent($consent);
        return redirect()->route("consents.index")->with(["status"=>__("messages.successfullyDeleted",["type"=>"Consent","title"=>$title])]);
    }
}
