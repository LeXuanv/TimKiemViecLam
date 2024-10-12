<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Bookmark
 * 
 * @property int $id
 * @property int $job_vacancy_id
 * @property int $job_seeker_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property JobSeeker $job_seeker
 * @property JobVacancy $job_vacancy
 *
 * @package App\Models
 */
class Bookmark extends Model
{
	protected $table = 'bookmarks';

	protected $casts = [
		'job_vacancy_id' => 'int',
		'job_seeker_id' => 'int'
	];

	protected $fillable = [
		'job_vacancy_id',
		'job_seeker_id'
	];

	public function job_seeker()
	{
		return $this->belongsTo(JobSeeker::class);
	}

	public function job_vacancy()
	{
		return $this->belongsTo(JobVacancy::class);
	}
}
