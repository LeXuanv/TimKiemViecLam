<?php

namespace App\Modules\JobSeeker\Controllers;

use App\Http\Controllers\Controller;
use App\Services\EducationDetailService;
use App\Services\JobSeekerService;
use App\Services\SkillService;
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
    }
}
