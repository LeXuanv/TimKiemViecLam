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

    public function getAll()
    {
        return $this->jobSeeker->all();
    }

    public function saveLogoPath($jobSeeker, $path)
    {
        $jobSeeker->logo = $path;
        $jobSeeker->save();
    }
    public function saveCvPath($jobSeeker, $path)
    {
        $jobSeeker->cv = $path;
        $jobSeeker->save();
    }

    public function getCvByJobSeekerId($id)
    {
        $jobSeeker = $this->jobSeeker->find($id);
        if ($jobSeeker) {
            return $jobSeeker->cv;
        }
        return null;
    }
}
