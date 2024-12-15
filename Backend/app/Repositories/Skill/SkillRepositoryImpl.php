<?php

namespace App\Repositories\Skill;

use App\Models\JobSeekerSkill;
use App\Models\Skill;
use App\Models\TypeSkill;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SkillRepositoryImpl implements SkillRepository
{
    protected $skill, $jobSeekerSkill, $typeSkill;

    public function __construct(Skill $skill, JobSeekerSkill $jobSeekerSkill, TypeSkill $typeSkill)
    {
        $this->skill = $skill;
        $this->jobSeekerSkill = $jobSeekerSkill;
        $this->typeSkill = $typeSkill;
    }

    public function getAllSkill()
    {
        return $this->skill->select('id', 'name', "type_skill_id")->get();
    }

    public function store($params)
    {
        DB::beginTransaction();
        try {
            $this->skill->create($params);
            DB::commit();
            return true;
        } catch (\Error $e) {
            DB::rollBack();
            Log::error($e);
            return false;
        }
    }

    public function updateById($id, $params)
    {
        $skill = $this->findById($id);
        if ($skill) {
            $skill->update($params);
            return true;
        }
        return false;
    }

    public function destroyById($id)
    {
        $skill = $this->findById($id);
        if ($skill) {
            $skill->delete();
            return true;
        }
        return false;
    }

    public function findById($id): Skill
    {
        return $this->skill->find($id);
    }

    public function getByJobSeekerId($id)
    {
        $jobSeekerSkills = $this->jobSeekerSkill->where('job_seeker_id', $id)->get();
        if (count($jobSeekerSkills)) {
            return $this->skill->whereIn('id', $jobSeekerSkills->pluck('skill_id'))->select('id', 'name')->get();
        }
        return [];
    }

    public function updateJobSeekerSkills($jobSeeker, $skill_ids)
    {
        DB::beginTransaction();
        try {
            $this->jobSeekerSkill->where('job_seeker_id', $jobSeeker->id)->delete();
            $skill_ids = explode(',', $skill_ids);
            foreach ($skill_ids as $skill_id) {
                $this->jobSeekerSkill->create([
                    'job_seeker_id' => $jobSeeker->id,
                    'skill_id' => $skill_id
                ]);
            }
            DB::commit();
            return true;
        } catch (\Error $e) {
            DB::rollBack();
            Log::error($e);
            return false;
        }

    }

    public function getAllTypeSkill()
    {
        return $this->typeSkill->all();
    }
}
