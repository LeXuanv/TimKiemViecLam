<?php

namespace App\Modules\Bookmark\Controllers;
use App\Models\Bookmark;
use App\Models\Category;
use App\Models\Company;
use App\Models\JobPosition;
use App\Models\JobSeeker;
use App\Models\JobVacancy;
use App\Models\Province;
use App\Modules\JobVacancy\DTOs\GetJobVacancyDTO;
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
