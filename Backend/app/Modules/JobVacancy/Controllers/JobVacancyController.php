<?php

namespace App\Modules\JobVacancy\Controllers;

use App\Models\Category;
use App\Models\Company;
use App\Models\JobPosition;
use App\Models\JobVacancy;
use App\Models\Province;
use App\Modules\JobVacancy\DTOs\CreateJobVacancyDTO;
use App\Modules\JobVacancy\DTOs\GetByIdJobVacancyDTO;
use App\Services\JobVacancyService;
use Auth;
use GuzzleHttp\Psr7\Message;
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
    public function indexJobPublishByCompany()
    {
        //
        

        $jobVacancyDTOs = $this->jobVacancyService->getAllJobPublishByCompany();
        return response()->json($jobVacancyDTOs);
    }
    
    public function indexJobPublishWithCompanyId($companyId)
    {
        //
        

        $jobVacancyDTOs = $this->jobVacancyService->getAllJobPublishByCompanyWithCompanyId($companyId);
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

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'request' => 'required|string',
            'interest' => 'required|string',
            'location' => 'required|string',
            'workTime' => 'required|string',
            'experience' => 'required|string',
            'gender' => 'required|string',

            'salary' => 'required|numeric',
            'employmentType' => 'required|string',
            'applicationDeadline' => 'required|date',
            'categoryName' => 'required|exists:categories,id',
            'jobPositionName' => 'required|exists:job_positions,id',
            // 'address' => 'required|string',
            'provinceName' => 'required|exists:provinces,code',

            
        ]);

        $data = $this->jobVacancyService->createJobVacancy($validatedData);

        return response()->json($data, 201);
        
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        
        $jobVacancyDTOs = $this->jobVacancyService->getByIdJobVacancy($id);
        return response()->json($jobVacancyDTOs);
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
        $validatedData = $request->validate([
             'title' => 'required|string|max:255',
            'description' => 'required|string',
            'request' => 'required|string',
            'interest' => 'required|string',
            'location' => 'required|string',
            'workTime' => 'required|string',
            'experience' => 'required|string',
            'gender' => 'required|string',

            'salary' => 'required|numeric',
            'employmentType' => 'required|string',
            'applicationDeadline' => 'required|date',
            'categoryName' => 'required|exists:categories,id',
            'jobPositionName' => 'required|exists:job_positions,id',
            // 'address' => 'required|string',
            'provinceName' => 'required|exists:provinces,code',

        ]);

        $data = $this->jobVacancyService->updateJobVacancy($id, $validatedData);

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $jobVacancy = JobVacancy::find($id);
        $jobVacancy->delete();
        return response()->json([
           'message' => 'Job vacancy deleted successfully'
        ], 204);
    }
    public function search(Request $request)
    {
        $searchTerm = $request->input('searchTerm');
        $categoryId = $request->input('categoryId');
        $provinceId = $request->input('provinceId');

        if (!$searchTerm && !$categoryId && !$provinceId) {
            return response()->json(['error' => 'No search criteria provided'], 400);
        }

        $jobVacanciesDTOs = $this->jobVacancyService->searchJobsFinal($searchTerm, $categoryId, $provinceId);

        if ($jobVacanciesDTOs->isEmpty()) {
            return response()->json( 404);
        }

        return response()->json($jobVacanciesDTOs);
    }
    public function searchJobInCompany(Request $request)
    {
        $searchTerm = $request->input('searchTerm');
        

        $jobVacanciesDTOs = $this->jobVacancyService->searchCompanyJobs($searchTerm);

        if (!$jobVacanciesDTOs || $jobVacanciesDTOs->isEmpty()) {
            return response()->json(['message' => 'No jobs found for the company'], 404);
        }

        return response()->json($jobVacanciesDTOs);
    }


}
