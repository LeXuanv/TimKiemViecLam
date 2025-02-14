<?php

namespace App\Services;

use App\Models\Bookmark;
use App\Models\Company;
use App\Models\JobApplication;
use App\Models\JobVacancy;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\User\UserRepository;
use Illuminate\Support\Facades\Storage;

class CompanyService
{
    protected $userRepository, $jobVacancy, $jobApplication, $bookmark;
    public function __construct(
        private readonly CompanyRepository $companyRepository,
        UserRepository $userRepository,
        JobVacancy $jobVacancy,
        JobApplication $jobApplication,
        Bookmark $bookmark
    ) {
        $this->userRepository = $userRepository;
        $this->jobVacancy = $jobVacancy;
        $this->jobApplication = $jobApplication;
        $this->bookmark = $bookmark;
    }

    public function store($params)
    {
        $this->companyRepository->store($params);
    }

    public function update($company, $params)
    {
        return $this->companyRepository->update($company, $params);
    }

    public function getAll()
    {
        $companies = $this->companyRepository->getAll();
        $companies->getCollection()->transform(function ($company) {
            $company->countJob = $this->countJobOfCompany($company->id);
            return $company;
        });
        return $companies;

    }
    public function getAllByAdmin()
    {
        $companies = $this->companyRepository->getAllByAdmin();
        $companies->getCollection()->transform(function ($company) {
            $company->countJob = $this->countJobOfCompany($company->id);
            return $company;
        });
        return $companies;

    }
    public function getById($id)
    {
        return $this->companyRepository->getById($id);
    }

    public function uploadLogo($user, $request)
    {
        $image = $request->file('logo');

        $name = rand();
        $path = 'images/company/' . $name . '.' . pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('images/company')) {
            Storage::disk('public')->makeDirectory('images/company');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $company = Company::where('user_id', $user->id)->first();
        if ($company) {
            $old_path = $company->logo;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                if($old_path!="images/companylogo.png"){
                    Storage::disk('public')->delete($old_path);

                }
            }
            $this->companyRepository->saveLogoPath($company, $path);
        }

        return $path;

    }
    public function searchByName($searchTerm)
    {
        $companies = Company::where('name', 'LIKE', '%' . $searchTerm . '%')
                    ->orWhere('description', 'LIKE', '%' . $searchTerm . '%')
                    ->paginate(9);

        $companies->getCollection()->transform(function ($company) {
            $company->countJob = $this->countJobOfCompany($company->id);
            return $company;
        });

        return $companies;
    }

    public function countJobOfCompany($companyId)
    {
        return JobVacancy::where('company_id', $companyId)->count();
    }

    public function deleteById($id)
    {
        $company = $this->companyRepository->getById($id);
        if ($company) {
            $user_id = $company->user_id;
            try {
                $this->userRepository->deleteById($user_id);
                $jobVacancyIds = $this->jobVacancy->where('company_id', $id)->pluck('id')->toArray();
                $this->jobVacancy->whereIn('id', $jobVacancyIds)->delete();
                $this->jobApplication->whereIn('job_vacancy_id', $jobVacancyIds)->delete();
                $this->bookmark->whereIn('job_vacancy_id', $jobVacancyIds)->delete();
                $this->jobApplication->whereIn('id', $jobVacancyIds)->delete();
                $this->companyRepository->deleteById($id);
                return true;
            }
            catch (\Error $e) {
                return false;
            }
        }
        return false;
    }

    public function edit($id)
    {
        $company = $this->getById($id);
        $info = [];

        if ($company) {
            $info = $company->getFullInfo();
        }
        return $info;
    }
}
