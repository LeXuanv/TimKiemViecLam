<?php

namespace App\Modules\JobVacancy\Controllers;

use App\Models\JobVacancy;
use App\Services\JobVacancyService;
use Auth;
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
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|numeric',
            'employment_type' => 'required|string',
            'application_deadline' => 'required|date',
            'is_published' => 'boolean',
            'category_id' => 'required|integer',
            'job_position_id' => 'required|integer',
            'address' => 'required|string',
            'province_code' => 'required|string',
        ]);

        $validatedData['company_id'] = Auth::user()->company_id;

        $jobVacancy = JobVacancy::create($validatedData);

        return response()->json($jobVacancy, 201);
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
