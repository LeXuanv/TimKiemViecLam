<?php

namespace App\Modules\JobVacancy\Controllers;

use App\Models\JobVacancy;
use App\Services\JobVacancyService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class JobVacancyController extends Controller
{
    protected $jobVacancyService;

    public function __construct(JobVacancyService $jobVacancyService)
    {
        $this->jobVacancyService = $jobVacancyService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $jobVacancyDTOs = $this->jobVacancyService->getAllJobVacancies();
        return response()->json($jobVacancyDTOs);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $jobVacancyDTO = $this->jobVacancyService->getByIdJobVacancy($id);

        if (!$jobVacancyDTO) {
            return response()->json([
               'message' => 'Job vacancy not found'
            ], 404);
        }

        return response()->json($jobVacancyDTO);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
