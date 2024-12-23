<?php

namespace App\Services;

use App\Models\Bookmark;
use App\Models\JobApplication;
use App\Models\JobSeeker;
use App\Repositories\EducationDetail\EducationDetailRepository;
use App\Repositories\JobSeeker\JobSeekerRepository;
use App\Repositories\Skill\SkillRepository;
use App\Repositories\User\UserRepository;
use Illuminate\Support\Facades\Storage;

class JobSeekerService
{
    protected $userRepository, $skillRepository, $educationDetailRepository, $jobApplication, $bookmark;
    public function __construct(
        private readonly JobSeekerRepository $jobSeekerRepository,
        UserRepository $userRepository,
        SkillRepository $skillRepository,
        EducationDetailRepository $educationDetailRepository,
        JobApplication $jobApplication,
        Bookmark $bookmark
    ) {
        $this->userRepository = $userRepository;
        $this->skillRepository = $skillRepository;
        $this->educationDetailRepository = $educationDetailRepository;
        $this->jobApplication = $jobApplication;
        $this->bookmark = $bookmark;
    }

    public function store($params)
    {
        return $this->jobSeekerRepository->store($params);

    }

    public function update($jobSeeker, $params)
    {
        return $this->jobSeekerRepository->update($jobSeeker, $params);
    }

    public function getAll()
    {
        return $this->jobSeekerRepository->getAll();
    }


    public function uploadLogo($user, $request)
    {
        $image = $request->file('logo');

        $name = rand();
        $path = 'images/job_seeker/'.$name.'.'.pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('images/job_seeker')) {
            Storage::disk('public')->makeDirectory('images/job_seeker');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        if ($jobSeeker) {
            $old_path = $jobSeeker->logo;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                if ($old_path != "images/userlogo.png") {
                    Storage::disk('public')->delete($old_path);

                }
            }
            $this->jobSeekerRepository->saveLogoPath($jobSeeker, $path);
        }

        return $path;

    }

    public function uploadCv($user, $request)
    {
        $image = $request->file('cv');

        $name = rand();
        $path = 'files/job_seeker/'.$name.'.'.pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('files/job_seeker')) {
            Storage::disk('public')->makeDirectory('files/job_seeker');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $jobSeeker = JobSeeker::where('user_id', $user->id)->first();
        if ($jobSeeker) {
            $old_path = $jobSeeker->cv;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                if ($old_path != "images/userlogo.png") {
                    Storage::disk('public')->delete($old_path);

                }
            }
            $this->jobSeekerRepository->saveCvPath($jobSeeker, $path);
        }

        return $path;

    }

    public function getCvByJobSeekerId($id)
    {
        return $this->jobSeekerRepository->getCvByJobSeekerId($id);
    }

    public function find($id)
    {
        return $this->jobSeekerRepository->find($id);
    }

    public function deleteById($id)
    {
        $jobSeeker = $this->find($id);
        if ($jobSeeker) {
            $user_id = $jobSeeker->user_id;
            try {
                $this->userRepository->deleteById($user_id);
                $this->skillRepository->deleteJobSeekerSkillByJobSeekerId($id);
                $this->educationDetailRepository->deleteByJobSeekerId($id);
                $this->jobApplication->where('job_seeker_id', $id)->delete();
                $this->bookmark->where('job_seeker_id', $id)->delete();
                $this->jobSeekerRepository->deleteById($id);
                return true;
            }
            catch (\Error $e) {
                return false;
            }
        }
        return false;
    }

    public function edit($id)
    {
        $jobSeeker = $this->find($id);
        $info = [];

        if ($jobSeeker) {
            $info = $jobSeeker->getFullInfo();
        }
        return $info;
    }
}
