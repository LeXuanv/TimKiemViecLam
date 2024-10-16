<?php

namespace App\Repositories\User;

use App\Models\User;

interface   UserRepository {
    public function store($params): User;
    public function update($user, $params): void;
}
