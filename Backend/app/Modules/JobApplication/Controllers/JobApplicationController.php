<?php

namespace App\Modules\JobApplication\Controllers;
use App\Models\Bookmark;
use App\Models\Company;
use App\Models\JobApplication;
use App\Models\JobSeeker;
use App\Models\JobVacancy;
use Auth;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

class JobApplicationController extends Controller
{
    
   
    public function toggleApply(Request $request, $jobVacancyId)
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();

        $application = JobApplication::where('job_seeker_id', $jobSeeker->id)
                            ->where('job_vacancy_id', $jobVacancyId)
                            ->first();

        if ($application) {
            $application->delete();
            return response()->json(['message' => 'Job unapplication successfully'], 200);
        } else {
            JobApplication::create([
                'application_date' => now(),
                'job_seeker_id' => $jobSeeker->id,
                'job_vacancy_id' => $jobVacancyId,
                'status' => 0,
            ]);
            return response()->json(['message' => 'Job application successfully'], 201);
        }
    }
    public function indexOfSeeker()
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        $jobApplicationIds = JobApplication::where('job_seeker_id', $jobSeeker->id)->pluck('job_vacancy_id');
        $jobVacancies = JobVacancy::whereIn('id', $jobApplicationIds)->get();

        return response()->json($jobVacancies, 200);
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
    public function accept($job_vacancy)
    {
        $user = Auth::user();
        
        
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $applicationJob = JobApplication::find($job_vacancy);
        if (!$applicationJob) {
            return response()->json(['message'=> 'application job not found'], 404);
        }
        if ($applicationJob->status == 0) {
            $applicationJob->status = 1;
            $applicationJob->save();
    
            return response()->json(['message' => 'Application accepted successfully']);
        }
    
        return response()->json(['message' => 'Application has already been accepted or has invalid status'], 400);


    }
   
}
