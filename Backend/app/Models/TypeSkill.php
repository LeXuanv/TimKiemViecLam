<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeSkill extends Model
{
    protected $table = 'type_skills';

	protected $fillable = [
		'name',
	];
    public function skills()
	{
		return $this->hasMany(Skill::class, 'type_skill_id');
	}

    public function getSkillByJobSeekerId($job_seeker_id)
    {
        $skill_ids = JobSeekerSkill::where('job_seeker_id', $job_seeker_id)->pluck('skill_id')->toArray();
        if (isset($skill_ids)) {
            return Skill::whereIn('id', $skill_ids)->where('type_skill_id', $this->id)->get();
        }
        return null;
    }
}
