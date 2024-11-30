<?php

namespace App\Services;

use App\Repositories\JobSeeker\JobSeekerRepository;

class JobSeekerService
{
    public function __construct(
        private readonly JobSeekerRepository $jobSeekerRepository,
    ) {

    }
    public function store($params)
    {
        $this->jobSeekerRepository->store($params);
    }

    public function update($jobSeeker, $params)
    {
        $this->jobSeekerRepository->update($jobSeeker, $params);
    }

    public function getAll()
    {
        return $this->jobSeekerRepository->getAll();
    }
}
