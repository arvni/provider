<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\SymptomGroupResource;
use App\Interfaces\SymptomGroupRepositoryInterface;
use Illuminate\Http\Request;

class ListSymptomGroupController extends Controller
{
    private  $symptomGroupRepository;
    public function __construct(SymptomGroupRepositoryInterface $symptomGroupRepository)
    {
        $this->symptomGroupRepository= $symptomGroupRepository;
    }
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $symptomGroups=$this->symptomGroupRepository->getAllSymptomGroups($request->all());
        return SymptomGroupResource::collection($symptomGroups);
    }
}
