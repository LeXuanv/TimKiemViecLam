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

    public function getInfoById($id)
    {
        return JobSeeker::find($id);
    }

    public function updateById($jobSeeker): void
    {
        $jobSeeker->save();
    }

    public function destroyById($id): void
    {
        $jobSeeker = JobSeeker::find($id);
        $jobSeeker->delete();
    }
}
