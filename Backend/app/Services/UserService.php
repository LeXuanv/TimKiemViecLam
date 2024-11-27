<?php

namespace App\Services;

use App\Models\Company;
use App\Models\JobSeeker;
use App\Models\User;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\JobSeeker\JobSeekerRepository;
use App\Repositories\User\UserRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function __construct(
        private readonly UserRepository $userRepository,
        CompanyService $companyService,
        JobSeekerService $jobSeekerService
    ) {
        $this->companyService = $companyService;
        $this->jobSeekerService = $jobSeekerService;
    }

    public function store(Request $request)
    {
        $params = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id
        ];
        $user = $this->userRepository->store($params);

        $otherParams = [
            'name' => $request->name,
            'email' => $request->email,
            'user_id' => $user->id,
        ];

        if ($request->role_id == 2) {
            $this->companyService->store($otherParams);
        } elseif ($request->role_id == 3) {
            $this->jobSeekerService->store($otherParams);
        }

        return $user;
    }

    public function show(User $user)
    {
        $info = [];
        if ($user->isCompany()) {
            $company = $user->companies()->first();
            $info = $company ? $company->getFullInfo() : [];
        }

        if ($user->isJobSeeker()) {
            $jobSeeker = $user->job_seekers()->first();
            $info = $jobSeeker ? $jobSeeker->getInfo() : [];
        }
        $result = array_merge($user->toArray(), $info);
        return $result;
    }
    public function edit(User $user)
    {
        $info = [];
        if ($user->isCompany()) {
            $company = $user->companies()->first();
            $info = $company ? $company->getFullInfo() : [];
        }

        if ($user->isJobSeeker()) {
            $jobSeeker = $user->job_seekers()->first();
            $info = $jobSeeker ? $jobSeeker->getFullInfo() : [];
        }
        return $info;
    }

    public function update(User $user, $params)
    {
        $this->userRepository->update($user, $params);
        if ($user->isCompany()) {
            $company = Company::where('user_id', $user->id)->first();
            $this->companyService->update($company, $params);
        }
        if ($user->isJobSeeker()) {
            $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
            $params['birth_date'] = $params["birth_date"] ? Carbon::createFromFormat('d/m/Y', $params["birth_date"]) : null;
            $this->jobSeekerService->update($jobSeeker, $params);
        }
    }

    public function destroy(User $user)
    {
        if ($user->isCompany()) {
            $user->companies->delete();
        }
        if ($user->isJobSeeker()) {
            $user->job_seekers->delete();
        }
        $user->delete();
    }
}
