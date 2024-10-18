<?php

namespace App\Services;

use App\Models\Province;
use App\Modules\JobVacancy\DTOs\CreateJobVacancyDTO;
use App\Modules\JobVacancy\DTOs\GetByIdJobVacancyDTO;
use App\Modules\JobVacancy\DTOs\GetJobVacancyDTO;
use App\Models\JobVacancy;
use App\Models\Company;
use App\Models\Category;
use App\Models\JobPosition;
use Auth;
use Request;

class JobVacancyService
{
    public function getAllJobVacancies()
    {
        $jobVacancies = JobVacancy::all();

        return $jobVacancies->map(function ($jobVacancy) {
            $dto = new GetJobVacancyDTO();
            $dto->title = $jobVacancy->title;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = 'Tỉnh ' . Province::find($jobVacancy->province_code) -> name ?? null;

            return $dto;
        });
    }
    public function getAllJobPublishByCompanyWithCompanyId($companyId)
    {
        
        $company = Company::find($companyId);
        
        $jobVacancies = JobVacancy::where('company_id', $company->id)->get();

        return $jobVacancies->map(function ($jobVacancy) {
            $dto = new GetJobVacancyDTO();
            $dto->title = $jobVacancy->title;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = 'Tỉnh ' . Province::find($jobVacancy->province_code) -> name ?? null;

            return $dto;
        });
    }
    public function getAllJobPublishByCompany()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['error' => 'Company not found.', 'user_id' => $user->id, 'user_email' => $user->email], 404);
        }
        $jobVacancies = JobVacancy::where('company_id', $company->id)->get();

        return $jobVacancies->map(function ($jobVacancy) {
            $dto = new GetJobVacancyDTO();
            $dto->title = $jobVacancy->title;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = 'Tỉnh ' . Province::find($jobVacancy->province_code) -> name ?? null;

            return $dto;
        });
    }
    public function getByIdJobVacancy($id)
    {
        $jobVacancy = JobVacancy::find($id);

        if (!$jobVacancy) {
            return null;
        }

        $dto = new GetByIdJobVacancyDTO();
        $dto->title = $jobVacancy->title;
        $dto->description = $jobVacancy->description;
        $dto->salary = $jobVacancy->salary;
        $dto->employmentType = $jobVacancy->employment_type;
        $dto->applicationDateline = $jobVacancy->application_deadline;
        $dto->address = $jobVacancy->address;

        $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
        $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
        $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
        $dto->provinceName = 'Tỉnh ' . Province::find($jobVacancy->province_code)->name ?? null;

        return $dto;
    }

    public function createJobVacancy($validatedData)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['error' => 'Company not found.', 'user_id' => $user->id, 'user_email' => $user->email], 404);
        }

        $jobVacancy = JobVacancy::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'salary' => $validatedData['salary'],
            'employment_type' => $validatedData['employmentType'],
            'application_deadline' => $validatedData['applicationDateline'],
            'company_id' => $company->id,
            'category_id' => $validatedData['categoryName'],
            'job_position_id' => $validatedData['jobPositionName'],
            'address' => $validatedData['address'],
            'province_code' => $validatedData['provinceName'],
            'is_published' => 1
        ]);

        $category = Category::find($validatedData['categoryName']);
        $jobPosition = JobPosition::find($validatedData['jobPositionName']);
        $province = Province::find($validatedData['provinceName']);


        return [
            'title' => $jobVacancy->title,
            'description' => $jobVacancy->description,
            'salary' => $jobVacancy->salary,
            'employment_type' => $jobVacancy->employment_type,
            'application_deadline' => $jobVacancy->application_deadline,
            'company_name' => $company->name,
            'category_name' => $category ? $category->name : null,
            'job_position_name' => $jobPosition ? $jobPosition->name : null,
            'address' => $jobVacancy->address,
            'province_name' => $province ? $province->name : null
        ];
    }
    
    public function updateJobVacancy($id, $validatedData)
    {
        $user = Auth::user();

        $company = Company::where('user_id', $user->id)->first();
       

        $jobVacancy = JobVacancy::find($id);

        if (!$jobVacancy) {
            return response()->json(['error' => 'Job vacancy not found'], 404);
        }

        if ($jobVacancy->company_id !== $company->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $jobVacancy->update([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'salary' => $validatedData['salary'],
            'employment_type' => $validatedData['employmentType'],
            'application_deadline' => $validatedData['applicationDateline'],
            'category_id' => $validatedData['categoryName'],
            'job_position_id' => $validatedData['jobPositionName'],
            'address' => $validatedData['address'],
            'province_code' => $validatedData['provinceName'],
        ]);

        $category = Category::find($validatedData['categoryName']);
        $jobPosition = JobPosition::find($validatedData['jobPositionName']);
        $province = Province::find($validatedData['provinceName']);

        

        return [
            'title' => $jobVacancy->title,
            'description' => $jobVacancy->description,
            'salary' => $jobVacancy->salary,
            'employment_type' => $jobVacancy->employment_type,
            'application_deadline' => $jobVacancy->application_deadline,
            'company_name' => $company->name,
            'category_name' => $category ? $category->name : null,
            'job_position_name' => $jobPosition ? $jobPosition->name : null,
            'address' => $jobVacancy->address,
            'province_name' => $province ? $province->name : null
        ];
    }

    public function searchJobs($searchTerm)
    {
        $jobs = JobVacancy::where('title', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('description', 'LIKE', '%' . $searchTerm . '%')
            ->get();

        // Chuyển đổi sang DTO
        $jobVacancyDTOs = $jobs->map(function ($job) {
            $dto = new GetJobVacancyDTO();
            $dto->title = $job->title;
            $dto->salary = $job->salary;
            $dto->employmentType = $job->employment_type;
            $dto->companyName = Company::find($job->company_id)->name ?? null;
            $dto->categoryName = Category::find($job->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($job->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($job->province_code)->name ?? null;

            return $dto;
        });

        return $jobVacancyDTOs;
    }


    public function searchCompanyJobs($searchTerm)
    {
        $user = Auth::user();

        if (!$searchTerm) {
            return response()->json(['error' => 'No search term provided'], 400);
        }

        
        $company = Company::where('user_id', $user->id)->first();


        $jobs = JobVacancy::where('company_id', $company->id)
        ->where(function ($query) use ($searchTerm) {
            $query->where('title', 'LIKE', '%' . $searchTerm . '%')
                  ->orWhere('description', 'LIKE', '%' . $searchTerm . '%');
        })
        ->get();

        $jobVacancyDTOs = $jobs->map(function ($job) {
            $dto = new GetJobVacancyDTO();
            $dto->title = $job->title;
            $dto->salary = $job->salary;
            $dto->employmentType = $job->employment_type;
            $dto->companyName = Company::find($job->company_id)->name ?? null;
            $dto->categoryName = Category::find($job->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($job->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($job->province_code)->name ?? null;

            return $dto;
        });

        return $jobVacancyDTOs;
    }


}
