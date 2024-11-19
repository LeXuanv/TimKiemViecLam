<?php

namespace App\Modules\Bookmark\Controllers;
use App\Models\Bookmark;
use App\Models\JobSeeker;
use App\Models\JobVacancy;
use Auth;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

class BookmarkController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        $bookmarkedJobIds = Bookmark::where('job_seeker_id', $jobSeeker->id)->pluck('job_vacancy_id');
        $jobVacancies = JobVacancy::whereIn('id', $bookmarkedJobIds)->get();

        return response()->json($jobVacancies, 200);
    }

    public function toggleBookmark($jobVacancyId)
    {
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();

        $bookmark = Bookmark::where('job_seeker_id', $jobSeeker->id)
                            ->where('job_vacancy_id', $jobVacancyId)
                            ->first();

        if ($bookmark) {
            $bookmark->delete();
            return response()->json(['message' => 'Job unbookmarked successfully'], 200);
        } else {
            Bookmark::create([
                'job_seeker_id' => $jobSeeker->id,
                'job_vacancy_id' => $jobVacancyId
            ]);
            return response()->json(['message' => 'Job bookmarked successfully'], 201);
        }
    }

    public function checkBookmark($jobVacancyId){
        $user = Auth::user();
        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        $application = Bookmark::where('job_seeker_id', $jobSeeker->id)
                            ->where('job_vacancy_id', $jobVacancyId)
                            ->first();
        return response()->json([
            'isApplied' => $application ? true : false
        ]);
    }

    public function destroy($jobVacancyId)
    {
        $user = auth()->user();
        
        $user->bookmarks()->detach($jobVacancyId);
        
        return response()->json(['message' => 'Bookmark removed successfully'], 200);
    }
}
