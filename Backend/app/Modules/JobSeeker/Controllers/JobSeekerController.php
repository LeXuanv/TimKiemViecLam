<?php

namespace App\Modules\JobSeeker\Controllers;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use App\Models\JobSeeker;
use App\Models\JobSeekerSkill;
use App\Models\JobVacancy;
use App\Models\Company;
use App\Models\Category;
use App\Models\JobPosition;
use App\Models\Province;

use App\Modules\JobVacancy\DTOs\GetByIdJobVacancyDTO;
use App\Modules\JobVacancy\DTOs\GetJobVacancyDTO;
use App\Services\EducationDetailService;
use App\Services\JobSeekerService;
use App\Services\SkillService;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function Spatie\LaravelPdf\Support\pdf;

class JobSeekerController extends Controller
{
    private $jobSeekerService, $skillService, $educationDetailService;

    public function __construct(
        JobSeekerService $jobSeekerService,
        SkillService $skillService,
        EducationDetailService $educationDetailService,
    ) {
        $this->jobSeekerService = $jobSeekerService;
        $this->skillService = $skillService;
        $this->educationDetailService = $educationDetailService;
    }

    public function getSkill($id)
    {
        return $this->skillService->getByJobSeekerId($id);
    }

    public function updateSkill(Request $request)
    {
        $update = $this->skillService->updateJobSeekerSkills($request);
        return $update['status'] ? $this->sendResponse('',
            'Update successfully.') : $this->sendResponse($update['error'], 'Update failed.');
    }

    public function getEducationDetail($id)
    {
        return $this->educationDetailService->getByJobSeekerId($id);
    }

    public function storeEducationDetail(Request $request)
    {
        $data = $request->only(['job_seeker_id', 'university', 'degree', 'gpa']);
        $store = $this->educationDetailService->store($data);

        return $store['status'] ? $this->sendResponse('',
            'Store successfully.') : $this->sendResponse($store['error'], 'Store failed.');
    }

    public function updateEducationDetail(Request $request)
    {
        $update = $this->educationDetailService->update($request);
        return $update['status'] ? $this->sendResponse('',
            'Update successfully.') : $this->sendResponse($update['error'], 'Update failed.');
    }

    public function destroyEducationDetail(Request $request)
    {
        $destroy = $this->educationDetailService->destroy($request);
        return $destroy['status'] ? $this->sendResponse('',
            'Delete successfully.') : $this->sendResponse($destroy['error'], 'Delete failed.');
    }

    public function getAll()
    {
        return $this->jobSeekerService->getAll();
    }

    public function uploadLogo(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if ($request->hasFile('logo')) {
            $path = $this->jobSeekerService->uploadLogo($user, $request);
            return response()->json(['message' => 'Logo uploaded successfully!', 'path' => $path]);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }
    public function uploadCv(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'cv' => 'required|mimes:pdf,doc,docx,txt,rtf|max:4096',
        ]);
        if ($request->hasFile('cv')) {
            $path = $this->jobSeekerService->uploadCv($user, $request);
            return response()->json(['message' => 'Cv uploaded successfully!', 'path' => $path]);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }

    public function downloadCv($id)
    {
        $cv = $this->jobSeekerService->getCvByJobSeekerId($id);

        if (isset($cv) and Storage::disk('public')->exists($cv)) {
            return Storage::disk('public')->download($cv);
        }

        return response()->json(['message' => 'File không tồn tại!'], 404);
    }

    public function viewCv($id)
    {
        $cv = $this->jobSeekerService->getCvByJobSeekerId($id);

        if (isset($cv) and Storage::disk('public')->exists($cv)) {
            $file = Storage::disk('public')->get($cv);
            $mimeType = Storage::disk('public')->mimeType($cv);

            return response($file, 200)
                ->header('Content-Type', $mimeType)
                ->header('Content-Disposition', 'inline');
        }

        return response()->json(['message' => 'File không tồn tại!'], 404);
    }

    public function createCvById($id)
    {
        $jobSeeker = $this->jobSeekerService->find($id);
        if (!$jobSeeker) {
            abort(404);
        }
        $typeSkills = $this->skillService->getAllTypeSkill();
        $educationDetails = $this->educationDetailService->getByJobSeekerId($id);
        return view('JobSeeker::create_cv', compact('jobSeeker', 'typeSkills', 'educationDetails'));
    }

    public function downloadCvById($id)
    {
        $jobSeeker = $this->jobSeekerService->find($id);
        if (!$jobSeeker) {
            abort(404);
        }

        $typeSkills = $this->skillService->getAllTypeSkill();
        $skills = $this->skillService->getByJobSeekerId($id);
        $educationDetails = $this->educationDetailService->getByJobSeekerId($id);

//        return view('JobSeeker::download_cv', compact('jobSeeker', 'skills', 'educationDetails', 'typeSkills'));
        return pdf()
            ->view('JobSeeker::download_cv', compact('jobSeeker', 'skills', 'educationDetails', 'typeSkills'))
            ->name($jobSeeker->name.'_cv.pdf')
            ->download();

        // $html = view('JobSeeker::download_cv', compact('jobSeeker', 'skills', 'educationDetails', 'typeSkills'))->render();

        // $pdf = PDF\Pdf::loadHTML($html)
        //     ->setOption('isHtml5ParserEnabled', true)
        //     ->setOption('isPhpEnabled', true);

        // return $pdf->download($jobSeeker->name . '_cv.pdf');


    }

    public function getRecommendedJobs($jobSeekerId)
    {

        $jobAppliedIds = JobApplication::where('job_seeker_id', $jobSeekerId)->pluck('job_vacancy_id');
        if (count($jobAppliedIds)) {
            $appliedCategories = JobVacancy::whereIn('id', $jobAppliedIds)->pluck('category_id');
            $recommendedJobs = JobVacancy::where('is_published', true)
//            ->where('application_deadline', '>', now())
                ->orderByRaw("CASE WHEN category_id IN (" . $appliedCategories->implode(',') . ") THEN 1 ELSE 0 END DESC")
                ->get();
        }
        else {
            $recommendedJobs = JobVacancy::where('is_published', true)
//            ->where('application_deadline', '>', now())
                ->get();
        }


        $recommendedJobs = $recommendedJobs->map(function($job) use ($jobSeekerId) {
            $job->match_score = $this->calculateMatchScore($job, $jobSeekerId);
            return $job;
        });
        $jobVacancies = $recommendedJobs->where('match_score', '>', 0)->sortByDesc('match_score')->take(8); // lấy top 10 phù hợp

        $jobVacancies = $jobVacancies->map(function ($job) {
            $dto = new GetJobVacancyDTO();
            $dto->id = $job->id;
            $dto->title = $job->title;
            $dto->salary = $job->salary;
            $dto->employmentType = $job->employment_type;
            $dto->companyId = $job->company_id;
            $dto->companyLogo = Company::find($job->company_id)->logo ?? null;
            $dto->companyName = Company::find($job->company_id)->name ?? null;
            $dto->categoryName = Category::find($job->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($job->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($job->province_code)->name ?? null;

            return $dto;
        });

        return response()->json($jobVacancies);
    }

    private function calculateMatchScore($job, $jobSeekerId)
    {
        $score = 0;

        // Lấy danh sách skills của ứng viên
        $seekerSkills = JobSeekerSkill::join('skills', 'job_seeker_skills.skill_id', '=', 'skills.id')
            ->where('job_seeker_id', $jobSeekerId)
            ->pluck('skills.name')
            ->toArray();

        // Kiểm tra từng skill của ứng viên trong request của job
        foreach($seekerSkills as $skill) {
            // Chuyển đổi skill name thành lowercase và tìm trong request
            if(str_contains(strtolower($job->request), strtolower($skill))) {
                $score += 0.2;
            }
        }

        // Thêm điểm cho category
        $jobSeeker = JobSeeker::find($jobSeekerId);
        $categoryScore = (strpos(strtolower($job->getCategoryName()), strtolower($jobSeeker->industry_job)) !== false) ? 0.4 : 0;
        $score += $categoryScore;

        // Thêm điểm cho location match
        $jobSeeker = JobSeeker::find($jobSeekerId);
        $locationScore = ($job->province_code == $jobSeeker->province_code) ? 0.3 : 0;
        $score += $locationScore;

        // Giới hạn score tối đa là 1
        return min($score, 1);
    }
}
