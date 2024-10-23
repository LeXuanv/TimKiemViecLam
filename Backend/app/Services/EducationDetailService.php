<?php

namespace App\Services;

use App\Repositories\EducationDetail\EducationDetailRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EducationDetailService
{
    public function __construct(
        private readonly EducationDetailRepository $educationDetailRepository,
    ) {
    }

    public function get()
    {
        return $this->educationDetailRepository->getAllSkill();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'university' => 'required|string',
            'degree' => 'required|string',
            'major' => 'required|string',
            'graduation_year' => 'required|string',
            'gpa' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'error' =>
                    $validator->errors()
            ];
        }
        $params = $request->all();
        $user = $request->user();
        if ($user->isJobSeeker()) {
            $jobSeeker = $user->job_seekers->first();
            $params['job_seeker_id'] = $jobSeeker->id;
            if ($this->educationDetailRepository->store($params)) {
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

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|exists:education_details',
            'university' => 'required|string',
            'degree' => 'required|string',
            'major' => 'required|string',
            'graduation_year' => 'required|string',
            'gpa' => 'nullable|string',
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
            'university' => $request->university,
            'degree' => $request->degree,
            'major' => $request->major,
            'graduation_year' => $request->graduation_year,
            'gpa' => $request->gpa,
        ];
        if ($this->educationDetailRepository->updateById($id, $params)) {
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
            'id' => 'required|integer|exists:education_details'
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'error' =>
                    $validator->errors()
            ];
        }
        $id = $request->id;
        if ($this->educationDetailRepository->destroyById($id)) {
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
        return $this->educationDetailRepository->getByJobSeekerId($id);
    }
}
