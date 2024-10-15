<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\User\UserRepository;
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

    public function update(Request $params, $user): void
    {
        $user = User::find($user);
        $user->name = $params->input('name');
        $user->email = $params->input('email');
        $user->password = Hash::make($params->input('password'));

        $this->userRepository->updateById($user);
    }

    public function destroy(int $userId): void
    {
        $this->userRepository->destroyById($userId);
        session()->flush();
    }
}
