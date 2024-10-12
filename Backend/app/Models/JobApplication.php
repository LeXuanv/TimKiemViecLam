<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class JobApplication
 * 
 * @property int $id
 * @property Carbon $application_date
 * @property string|null $status
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
class JobApplication extends Model
{
	protected $table = 'job_applications';

	protected $casts = [
		'application_date' => 'datetime',
		'job_vacancy_id' => 'int',
		'job_seeker_id' => 'int'
	];

	protected $fillable = [
		'application_date',
		'status',
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
