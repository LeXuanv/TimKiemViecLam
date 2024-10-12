<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class JobSeekerSkill
 * 
 * @property int $id
 * @property int $skill_id
 * @property int $job_seeker_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property JobSeeker $job_seeker
 * @property Skill $skill
 *
 * @package App\Models
 */
class JobSeekerSkill extends Model
{
	protected $table = 'job_seeker_skills';

	protected $casts = [
		'skill_id' => 'int',
		'job_seeker_id' => 'int'
	];

	protected $fillable = [
		'skill_id',
		'job_seeker_id'
	];

	public function job_seeker()
	{
		return $this->belongsTo(JobSeeker::class);
	}

	public function skill()
	{
		return $this->belongsTo(Skill::class);
	}
}
