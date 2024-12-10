<?php

namespace App\Services;

use App\Models\JobSeeker;
use App\Repositories\Skill\SkillRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class SkillService
{
    public function __construct(
        private readonly SkillRepository $skillRepository,
    ) {
    }

    public function get()
    {
        return $this->skillRepository->getAllSkill();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:skills',
        ]);

        if ($validator->fails()) {
            return false;
        }
        $params = [
            'name' => $request->name,
        ];
        if ($this->skillRepository->store($params)) {
            return true;
        }
        return false;
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|exists:skills',
            'name' => [
                'required',
                'string',
                Rule::unique('skills')->ignore($request->id),
            ],
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'error' =>
                    $validator->errors()
            ];
        }
        $id = $request->id;
        $params = [
            'name' => $request->name,
        ];
        if ($this->skillRepository->updateById($id, $params)) {
            return [
                'status' => true,
            ];
        }
        return [
            'status' => false,
            'error' => 'server err'
        ];
    }

    public function destroy(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|exists:skills'
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'error' =>
                    $validator->errors()
            ];
        }
        $id = $request->id;
        if ($this->skillRepository->destroyById($id)) {
            return [
                'status' => true,
            ];
        }
        return [
            'status' => false,
            'error' => 'server err'
        ];
    }

    public function getByJobSeekerId($id)
    {
        return $this->skillRepository->getByJobSeekerId($id);
    }

    public function updateJobSeekerSkills(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'skill_ids' => 'required|string'
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'error' =>
                    $validator->errors()
            ];
        }
        $user = $request->user();
        if ($user->isJobSeeker()) {
            $jobSeeker = JobSeeker::where('user_id', $user->id)->first();

            // $jobSeeker = $user->job_seekers->first();
            $params = $request->skill_ids;
            if ($this->skillRepository->updateJobSeekerSkills($jobSeeker, $params)) {
                return [
                    'status' => true,
                ];
            }
        }
        return [
            'status' => false,
            'error' => 'server err'
        ];
    }
}
