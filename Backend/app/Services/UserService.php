<?php


namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    protected User $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function register($data)
    {
        $data['password'] = Hash::make($data['password']);
        $this->createUser($data);
    }

    public function createUser(array $data): User
    {
        return $this->user->create($data);
    }

    public function getUsers()
    {
        return $this->user->get();
    }

}
