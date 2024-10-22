<?php

namespace App\Modules\JobSeeker\Controllers;

use App\Http\Controllers\Controller;
use App\Services\JobSeekerService;
use App\Services\SkillService;
use Illuminate\Http\Request;

class JobSeekerController extends Controller
{
    private $jobSeekerService, $skillService;

    public function __construct(JobSeekerService $jobSeekerService, SkillService $skillService)
    {
        $this->jobSeekerService = $jobSeekerService;
        $this->skillService = $skillService;
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
}
