<?php

namespace App\Repositories\User;

interface   UserRepository {
    public function store($params): void;
    public function getInfoById($id);
    public function updateById($user): void;
    public function destroyById($id): void;
}
