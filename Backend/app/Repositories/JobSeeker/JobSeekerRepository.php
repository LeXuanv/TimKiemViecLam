<?php

namespace App\Repositories\JobSeeker;

use App\Models\JobSeeker;

interface   JobSeekerRepository {
    public function store($params): JobSeeker;
    public function update($jobSeeker, $params): void;

    public function getAll();
}
