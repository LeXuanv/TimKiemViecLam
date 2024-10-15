<?php

namespace App\Repositories\User;

use App\Models\User;

class UserRepositoryImpl implements UserRepository
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function store($params): User
    {
        return $this->user->create($params);
    }

    public function getInfoById($id)
    {
        return User::find($id);
    }

    public function updateById($user): void
    {
        $user->save();
    }

    public function destroyById($id): void
    {
        $user = User::find($id);
        $user->delete();
    }
}
