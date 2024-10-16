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

    public function update($user, $params): void
    {
        $user->update($params);
    }

}
