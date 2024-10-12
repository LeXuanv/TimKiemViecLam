<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Skill
 * 
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|JobSeeker[] $job_seekers
 *
 * @package App\Models
 */
class Skill extends Model
{
	protected $table = 'skills';

	protected $fillable = [
		'name'
	];

	public function job_seekers()
	{
		return $this->belongsToMany(JobSeeker::class, 'job_seeker_skills')
					->withPivot('id')
					->withTimestamps();
	}
}
