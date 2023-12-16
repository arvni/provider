<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SymptomResource;
use App\Interfaces\SymptomRepositoryInterface;
use App\Repositories\SymptomRepository;
use Illuminate\Http\Request;

class ListSymptomsController extends Controller
{
    private SymptomRepositoryInterface $symptomRepository;

    public function __construct(SymptomRepositoryInterface $symptomRepository)
    {
        $this->symptomRepository = $symptomRepository;
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $symptoms = $this->symptomRepository->getAllSymptoms();
        return SymptomResource::collection($symptoms);
    }
}
