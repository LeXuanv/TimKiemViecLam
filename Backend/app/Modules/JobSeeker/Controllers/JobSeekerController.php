<?php

namespace App\Modules\JobSeeker\Controllers;

use App\Http\Controllers\Controller;
use App\Services\EducationDetailService;
use App\Services\JobSeekerService;
use App\Services\SkillService;
use Illuminate\Http\Request;

class JobSeekerController extends Controller
{
    private $jobSeekerService, $skillService, $educationDetailService;

    public function __construct(JobSeekerService $jobSeekerService, SkillService $skillService, EducationDetailService $educationDetailService)
    {
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
        $store = $this->educationDetailService->store($request);
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
}
