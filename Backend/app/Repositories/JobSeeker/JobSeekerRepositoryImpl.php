<?php

namespace App\Repositories\JobSeeker;

use App\Models\JobSeeker;

class JobSeekerRepositoryImpl implements JobSeekerRepository
{
    protected $jobSeeker;

    public function __construct(JobSeeker $jobSeeker)
    {
        $this->jobSeeker = $jobSeeker;
    }

    public function store($params): JobSeeker
    {
        return $this->jobSeeker->create($params);
    }

    public function update($jobSeeker, $params): void
    {
        $jobSeeker->update($params);
    }

}
