<?php

namespace App\Services;

use App\Models\Company;
use App\Models\JobSeeker;
use App\Models\User;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\EducationDetail\EducationDetailRepository;
use App\Repositories\JobSeeker\JobSeekerRepository;
use App\Repositories\User\UserRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserService
{
    public function __construct(
        private readonly UserRepository $userRepository,
        CompanyService $companyService,
        JobSeekerService $jobSeekerService,
        EducationDetailService $educationDetailService,
    ) {
        $this->companyService = $companyService;
        $this->jobSeekerService = $jobSeekerService;
        $this->educationDetailService = $educationDetailService;
    }
    public function getAll() {
        return $this->userRepository->getAll();
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

        

        if ($request->role_id == 2) {
            $otherParams = [
                'name' => $request->name,
                'email' => $request->email,
                'user_id' => $user->id,
                'logo' => "images/companylogo.png"
            ];
            $this->companyService->store($otherParams);
        } elseif ($request->role_id == 3) {
            $otherParams = [
                'name' => $request->name,
                'email' => $request->email,
                'user_id' => $user->id,
                'logo' => "images/userlogo.png"
            ];
            // $this->jobSeekerService->store($otherParams);
            $jobSeeker = $this->jobSeekerService->store($otherParams);
            $finalParams = [
                'job_seeker_id' => $jobSeeker->id
            ];
            $this->educationDetailService->store($finalParams);
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
            // $params['birth_date'] = isset($params["birth_date"]) ? Carbon::createFromFormat('d/m/Y', $params["birth_date"]) : null;
            $this->jobSeekerService->update($jobSeeker, $params);
        }
    }
    public function changePassword($user, Request $request)
    {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'old_password' => 'required|string',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            throw new \Illuminate\Validation\ValidationException($validator);
        }

        if (!Hash::check($request->old_password, $user->password)) {
            throw new \UnexpectedValueException('The current password is incorrect.');
        }

        if (Hash::check($request->password, $user->password)) {
            throw new \UnexpectedValueException('The new password cannot be the same as the current password.');
        }

        $params = [
            'password' => Hash::make($request->password),
        ];
        $this->userRepository->update($user, $params);
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
    public function deleteUser($userId){
        $user = User::find($userId);
        if($user){
            $this->destroy($user);
            return response()->json(['message' => 'User deleted successfully'], 200);
        }
        return response()->json(['message' => 'User not found'], 404);
    }
}
