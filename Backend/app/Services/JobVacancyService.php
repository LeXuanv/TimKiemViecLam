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
        $perPage = 20;

        $jobVacancies = JobVacancy::with(['company', 'category', 'job_position', 'province'])
            ->paginate($perPage);

        $jobVacancies->getCollection()->transform(function ($jobVacancy) {
            $dto = new GetJobVacancyDTO();
            $dto->id = $jobVacancy->id;
            $dto->title = $jobVacancy->title;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            $dto->companyId = $jobVacancy->company_id;
            $dto->companyName = $jobVacancy->company->name ?? null;
            $dto->categoryName = $jobVacancy->category->name ?? null;
            $dto->jobPositionName = $jobVacancy->jobPosition->name ?? null;
            $dto->provinceName = $jobVacancy->province->name ?? null;
            $dto->companyLogo = $jobVacancy->company->logo ?? null;
            return $dto;
        });

    return $jobVacancies;
    }
    public function countJobOfCompany($companyId){
        return JobVacancy::where('company_id', $companyId)->count();
    }
    public function getAllJobPublishByCompanyWithCompanyId($companyId)
    {
        
        $company = Company::find($companyId);
        
        $jobVacancies = JobVacancy::where('company_id', $company->id)->paginate(5);

        $jobVacancies->getCollection()->transform(function ($jobVacancy) {
            $dto = new GetByIdJobVacancyDTO();
            $dto->id = $jobVacancy->id;
            $dto->title = $jobVacancy->title;
            $dto->description = $jobVacancy->description;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            $dto->applicationDeadline = $jobVacancy->application_deadline;
            // $dto->address = $jobVacancy->address;
            $dto->address = Company::find($jobVacancy->company_id)->address ?? null;
            $dto->companyLogo = Company::find($jobVacancy->company_id)->logo ?? null;


            $dto->request = $jobVacancy->request;
            $dto->interest = $jobVacancy->interest;
            $dto->location = $jobVacancy->location;
            $dto->workTime = $jobVacancy->work_time;
            $dto->experience = $jobVacancy->experience;
            $dto->gender = $jobVacancy->gender;
            $dto->companyId = $jobVacancy->company_id;
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($jobVacancy->province_code)->name ?? null;

            return $dto;
        });
        return $jobVacancies;
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
        $jobVacancies = JobVacancy::where('company_id', $company->id)->paginate(5);

        $jobVacancies->getCollection()->transform(function ($jobVacancy) {
            $dto = new GetByIdJobVacancyDTO();
            $dto->id = $jobVacancy->id;
            $dto->title = $jobVacancy->title;
            $dto->description = $jobVacancy->description;
            $dto->salary = $jobVacancy->salary;
            $dto->employmentType = $jobVacancy->employment_type;
            $dto->applicationDeadline = $jobVacancy->application_deadline;
            // $dto->address = $jobVacancy->address;
            $dto->address = Company::find($jobVacancy->company_id)->address ?? null;

            $dto->companyLogo = Company::find($jobVacancy->company_id)->logo ?? null;

            $dto->request = $jobVacancy->request;
            $dto->interest = $jobVacancy->interest;
            $dto->location = $jobVacancy->location;
            $dto->workTime = $jobVacancy->work_time;
            $dto->experience = $jobVacancy->experience;
            $dto->gender = $jobVacancy->gender;
            $dto->companyId = $jobVacancy->company_id;
            $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
            $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
            $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
            $dto->provinceName = Province::find($jobVacancy->province_code)->name ?? null;

            return $dto;
        });
        return $jobVacancies;
    }
    public function getByIdJobVacancy($id)
    {
        $jobVacancy = JobVacancy::find($id);

        if (!$jobVacancy) {
            return null;
        }

        $dto = new GetByIdJobVacancyDTO();
        $dto->id = $jobVacancy->id;
        $dto->title = $jobVacancy->title;
        $dto->description = $jobVacancy->description;
        $dto->salary = $jobVacancy->salary;
        $dto->employmentType = $jobVacancy->employment_type;
        $dto->applicationDeadline = $jobVacancy->application_deadline;
        // $dto->address = $jobVacancy->address;
        $dto->address = Company::find($jobVacancy->company_id)->address ?? null;

        $dto->companyLogo = Company::find($jobVacancy->company_id)->logo ?? null;

        $dto->request = $jobVacancy->request;
        $dto->interest = $jobVacancy->interest;
        $dto->location = $jobVacancy->location;
        $dto->workTime = $jobVacancy->work_time;
        $dto->experience = $jobVacancy->experience;
        $dto->gender = $jobVacancy->gender;
        $dto->companyId = $jobVacancy->company_id;

        $dto->companyName = Company::find($jobVacancy->company_id)->name ?? null;
        $dto->categoryName = Category::find($jobVacancy->category_id)->name ?? null;
        $dto->jobPositionName = JobPosition::find($jobVacancy->job_position_id)->name ?? null;
        $dto->provinceName = Province::find($jobVacancy->province_code)->name ?? null;

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
            'request' => $validatedData['request'],
            'interest' => $validatedData['interest'],
            'location' => $validatedData['location'],
            'work_time' => $validatedData['workTime'],
            'experience' => $validatedData['experience'],
            'salary' => $validatedData['salary'],
            'employment_type' => $validatedData['employmentType'],
            'application_deadline' => $validatedData['applicationDeadline'],
            'company_id' => $company->id,
            'category_id' => $validatedData['categoryName'],
            'job_position_id' => $validatedData['jobPositionName'],
            // 'address' => $validatedData['address'],
            'province_code' => $validatedData['provinceName'],
            'is_published' => 1,
            'gender' => $validatedData['gender']

        ]);

        $category = Category::find($validatedData['categoryName']);
        $jobPosition = JobPosition::find($validatedData['jobPositionName']);
        $province = Province::find($validatedData['provinceName']);


        return [
            'title' => $jobVacancy->title,
            'description' => $jobVacancy->description,
            'request' => $jobVacancy->request,
            'interest' => $jobVacancy->interest,
            'location' => $jobVacancy->location,
            'work_time' => $jobVacancy->work_time,
            'experience' => $jobVacancy->experience,
            'salary' => $jobVacancy->salary,
            'employment_type' => $jobVacancy->employment_type,
            'application_deadline' => $jobVacancy->application_deadline,
            'company_name' => $company->name,
            'category_name' => $category ? $category->name : null,
            'job_position_name' => $jobPosition ? $jobPosition->name : null,
            // 'address' => $jobVacancy->address,
            'province_name' => $province ? $province->name : null,
            'gender' => $jobVacancy->gender
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
            'request' => $validatedData['request'],
            'interest' => $validatedData['interest'],
            'location' => $validatedData['location'],
            'work_time' => $validatedData['workTime'],
            'experience' => $validatedData['experience'],
            'salary' => $validatedData['salary'],
            'employment_type' => $validatedData['employmentType'],
            'application_deadline' => $validatedData['applicationDeadline'],
            'company_id' => $company->id,
            'category_id' => $validatedData['categoryName'],
            'job_position_id' => $validatedData['jobPositionName'],
            // 'address' => $validatedData['address'],
            'province_code' => $validatedData['provinceName'],
            'is_published' => 1,
            'gender' => $validatedData['gender']
        ]);

        $category = Category::find($validatedData['categoryName']);
        $jobPosition = JobPosition::find($validatedData['jobPositionName']);
        $province = Province::find($validatedData['provinceName']);

        

        return [
            'title' => $jobVacancy->title,
            'description' => $jobVacancy->description,
            'request' => $jobVacancy->request,
            'interest' => $jobVacancy->interest,
            'location' => $jobVacancy->location,
            'work_time' => $jobVacancy->work_time,
            'experience' => $jobVacancy->experience,
            'salary' => $jobVacancy->salary,
            'employment_type' => $jobVacancy->employment_type,
            'application_deadline' => $jobVacancy->application_deadline,
            'company_name' => $company->name,
            'category_name' => $category ? $category->name : null,
            'job_position_name' => $jobPosition ? $jobPosition->name : null,
            // 'address' => $jobVacancy->address,
            'province_name' => $province ? $province->name : null,
            'gender' => $jobVacancy->gender
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

        return $jobVacancyDTOs;
    }

    public function searchJobsFinal($searchTerm, $categoryId, $provinceId)
    {
        $perPage = 20;
        $jobs = JobVacancy::query()
            ->when($searchTerm, function ($query) use ($searchTerm) {
                $query->where(function ($q) use ($searchTerm) {
                    $q->where('title', 'LIKE', '%' . $searchTerm . '%')
                    ->orWhere('description', 'LIKE', '%' . $searchTerm . '%');
                });
            })
            ->when($provinceId, function ($query) use ($provinceId) {
                $query->where('province_code', $provinceId);
            })
            ->when($categoryId, function ($query) use ($categoryId) {
                $query->where('category_id', $categoryId);
            })
            ->paginate($perPage);

        
        $jobs->getCollection()->transform(function ($job) {
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

        return $jobs;
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

        return $jobVacancyDTOs;
    }


}
