<?php

namespace App\Services;

use App\Models\Province;
use App\Modules\JobVacancy\DTOs\GetByIdJobVacancyDTO;
use App\Modules\JobVacancy\DTOs\GetJobVacancyDTO;
use App\Models\JobVacancy;
use App\Models\Company;
use App\Models\Category;
use App\Models\JobPosition;

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
    public function getByIdJobVacancy($id)
    {
        $jobVacancy = JobVacancy::find($id);

        if (!$jobVacancy) {
            return null; // Hoặc throw một ngoại lệ nếu không tìm thấy
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

}
