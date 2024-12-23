<?php

namespace App\Repositories\JobSeeker;

use App\Models\JobSeeker;

interface   JobSeekerRepository {
    public function store($params): JobSeeker;
    public function update($jobSeeker, $params);
    public function getAll();
    public function saveLogoPath($jobSeeker, $path);
    public function saveCvPath($jobSeeker, $path);
    public function getCvByJobSeekerId($id);
    public function find($id);
    public function deleteById($id);
}
