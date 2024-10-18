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
    public function index($job_vacancy)
    {
        $user = Auth::user();
        
        if ($user->role !== 'company') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $applications = JobApplication::where('job_vacancy_id', $job_vacancy)->get();

        return response()->json($applications, 200);
    }
    public function apply(Request $request, $job_vacancy)
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();

        $jobVacancy = JobVacancy::findOrFail($job_vacancy);

        $application = JobApplication::create([
            'application_date' => now(),
            'job_seeker_id' => $jobSeeker->id,
            'job_vacancy_id' => $jobVacancy->id,
        ]);

        return response()->json(['message' => 'Application submitted successfully', 'application' => $application], 201);
    }

    public function destroy($jobVacancyId)
    {
        $user = auth()->user();
        
        $user->bookmarks()->detach($jobVacancyId);
        
        return response()->json(['message' => 'Bookmark removed successfully'], 200);
    }
}
