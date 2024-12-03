<?php

namespace App\Modules\JobApplication\Controllers;
use App\Models\Bookmark;
use App\Models\Category;
use App\Models\Company;
use App\Models\JobApplication;
use App\Models\JobPosition;
use App\Models\JobSeeker;
use App\Models\JobVacancy;
use App\Models\Province;
use App\Modules\JobVacancy\DTOs\GetJobVacancyDTO;
use Auth;
use DB;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

class JobApplicationController extends Controller
{
    
   
    public function toggleApply($jobVacancyId)
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        DB::beginTransaction();
        try {
            $application = JobApplication::where('job_seeker_id', $jobSeeker->id)
                            ->where('job_vacancy_id', $jobVacancyId)
                            ->first();

            if ($application) {
                $application->delete();
                $message = 'Job unapplication successfully';
            } else {
                JobApplication::create([
                    'application_date' => now(),
                    'job_seeker_id' => $jobSeeker->id,
                    'job_vacancy_id' => $jobVacancyId,
                    'status' => 0,
                ]);
                $message = 'Job application successfully';
            }

            DB::commit();
            return response()->json(['message' => $message], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'An error occurred', 'error' => $e->getMessage()], 500);
        }
    }
    
    public function checkApplication($jobVacancyId){
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        $application = JobApplication::where('job_seeker_id', $jobSeeker->id)
                            ->where('job_vacancy_id', $jobVacancyId)
                            ->first();
        return response()->json([
            'isApplied' => $application ? true : false
        ]);
    }

    public function indexOfSeeker()
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        $jobApplicationIds = JobApplication::where('job_seeker_id', $jobSeeker->id)->pluck('job_vacancy_id');
        $jobVacancies = JobVacancy::whereIn('id', $jobApplicationIds)->get();

        return $jobVacancies->map(function ($jobVacancy) {
            $dto = new GetJobVacancyDTO();
            $dto->id = $jobVacancy->id;
            $dto->title = $jobVacancy->title;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            $dto->companyId = $jobVacancy->company_id;
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($jobVacancy->province_code) -> name ?? null;
            $dto->companyLogo = Company::find($jobVacancy->company_id)->logo ?? null;
            return $dto;
        });
    }




    public function index($job_vacancy)
    {
        $user = Auth::user();
        
        
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['message' => 'Unauthorizeda'], 403);
        }
        $applications = JobApplication::where('job_vacancy_id', $job_vacancy)->get();

        return response()->json($applications, 200);
    }
    public function accept($job_vacancy, $job_seeker_id)
    {
        $user = Auth::user();
        
        // Kiểm tra công ty của người dùng
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $jobVacancy = JobVacancy::where('id', $job_vacancy)
                                ->where('company_id', $company->id)
                                ->first();
        if (!$jobVacancy) {
            return response()->json(['message' => 'Job vacancy not found or you are not authorized to accept applicants for this job'], 404);
        }

        $applicationJob = JobApplication::where('job_vacancy_id', $job_vacancy)
                                        ->where('job_seeker_id', $job_seeker_id)
                                        ->first();

        if (!$applicationJob) {
            return response()->json(['message' => 'Application job not found'], 404);
        }

        if ($applicationJob->status == 0) {
            $applicationJob->status = 1;
            $applicationJob->save();
            
            return response()->json(['message' => 'Application accepted successfully']);
        }

        return response()->json(['message' => 'Application has already been accepted or has invalid status'], 400);
    }

    
}
