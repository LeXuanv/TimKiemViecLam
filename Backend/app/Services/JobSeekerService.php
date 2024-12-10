<?php

namespace App\Services;

use App\Models\JobSeeker;
use App\Repositories\JobSeeker\JobSeekerRepository;
use Illuminate\Support\Facades\Storage;

class JobSeekerService
{
    public function __construct(
        private readonly JobSeekerRepository $jobSeekerRepository,
    ) {

    }
    public function store($params)
    {
        // $this->jobSeekerRepository->store($params);
        return $this->jobSeekerRepository->store($params);

    }

    public function update($jobSeeker, $params)
    {
        $this->jobSeekerRepository->update($jobSeeker, $params);
    }

    public function getAll()
    {
        return $this->jobSeekerRepository->getAll();
    }


    public function uploadLogo($user, $request)
    {
        $image = $request->file('logo');

        $name = rand();
        $path = 'images/job_seeker/' . $name . '.' . pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('images/job_seeker')) {
            Storage::disk('public')->makeDirectory('images/job_seeker');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        if ($jobSeeker) {
            $old_path = $jobSeeker->logo;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                Storage::disk('public')->delete($old_path);
            }
            $this->jobSeekerRepository->saveLogoPath($jobSeeker, $path);
        }

        return $path;

    }

    public function uploadCv($user, $request)
    {
        $image = $request->file('cv');

        $name = rand();
        $path = 'files/job_seeker/' . $name . '.' . pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('files/job_seeker')) {
            Storage::disk('public')->makeDirectory('files/job_seeker');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        if ($jobSeeker) {
            $old_path = $jobSeeker->cv;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                Storage::disk('public')->delete($old_path);
            }
            $this->jobSeekerRepository->saveCvPath($jobSeeker, $path);
        }

        return $path;

    }

    public function getCvByJobSeekerId($id)
    {
        return $this->jobSeekerRepository->getCvByJobSeekerId($id);
    }
}