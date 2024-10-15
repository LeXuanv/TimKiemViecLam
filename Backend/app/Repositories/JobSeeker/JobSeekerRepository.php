<?php

namespace App\Repositories\JobSeeker;

use App\Models\JobSeeker;

interface   JobSeekerRepository {
    public function store($params): JobSeeker;
    public function getInfoById($id);
    public function updateById($user): void;
    public function destroyById($id): void;
}
