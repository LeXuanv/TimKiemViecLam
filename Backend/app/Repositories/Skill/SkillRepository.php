<?php

namespace App\Repositories\Skill;


use App\Models\Skill;

interface   SkillRepository {
    public function getAllSkill();
    public function store($params);
    public function updateById($id, $params);
    public function destroyById($id);
    public function findById($id): Skill;
    public function getByJobSeekerId($id);
    public function updateJobSeekerSkills($jobSeeker, $skill_ids);
    public function getAllTypeSkill();
    public function deleteJobSeekerSkillByJobSeekerId($jobSeeker_id);
}
