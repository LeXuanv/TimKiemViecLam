<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\User\UserRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserService
{
    public function __construct(
        private readonly UserRepository $userRepository,
    ) {
    }

    public function store(Request $params): void
    {
        $params = $params->validated();
        $params['password'] = Hash::make($params['password']);
        $this->userRepository->store($params);
    }

    public function info($id)
    {
        if ($id != session('id')){
            throw new Exception('Bạn không có quyền truy cập vào thông tin này !');
        }
        return $this->userRepository->getInfoById($id);
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
