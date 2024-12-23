<?php

namespace App\Modules\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CompanyService;
use App\Services\EducationDetailService;
use App\Services\JobSeekerService;
use App\Services\SkillService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function Spatie\LaravelPdf\Support\pdf;

class AdminController extends Controller
{
    private $jobSeekerService, $companyService;

    public function __construct(
        JobSeekerService $jobSeekerService,
        CompanyService $companyService
    ) {
        $this->jobSeekerService = $jobSeekerService;
        $this->companyService = $companyService;
    }

    public function editJobSeeker($id)
    {
        return $this->jobSeekerService->edit($id);
    }
    public function updateJobSeeker($id, Request $request)
    {
        $jobSeeker = $this->jobSeekerService->find($id);
        $update = $this->jobSeekerService->update($jobSeeker, $request->all());
        return $update ? $this->sendResponse('',
            'Update successfully.') : $this->sendResponse($update, 'Update failed.');
    }

    public function deleteJobSeeker(Request $request)
    {
        $id = $request->id ?? '';
        $delete = $this->jobSeekerService->deleteById($id);
        return $delete ? $this->sendResponse('',
            'Delete successfully.') : $this->sendResponse($delete, 'Delete failed.');
    }


    public function editCompany($id)
    {
        return $this->companyService->edit($id);
    }

    public function updateCompany($id, Request $request)
    {
        $company = $this->companyService->getById($id);
        $update = $this->companyService->update($company, $request->all());
        return $update ? $this->sendResponse('',
            'Update successfully.') : $this->sendResponse($update, 'Update failed.');
    }
    public function deleteCompany(Request $request)
    {
        $id = $request->id ?? '';
        $delete = $this->companyService->deleteById($id);
        return $delete ? $this->sendResponse('',
            'Delete successfully.') : $this->sendResponse($delete, 'Delete failed.');
    }
}
