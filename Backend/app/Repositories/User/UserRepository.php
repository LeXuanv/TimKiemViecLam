<?php

namespace App\Repositories\User;

use App\Models\User;

interface   UserRepository {
    public function store($params): User;
    public function getInfoById($id);
    public function updateById($user): void;
    public function destroyById($id): void;
}
