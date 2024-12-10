<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class EducationDetail
 *
 * @property int $id
 * @property string|null $university
 * @property string|null $degree
 * @property string|null $major
 * @property Carbon|null $graduation_year
 * @property float|null $gpa
 * @property int $job_seeker_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @property JobSeeker $job_seeker
 *
 * @package App\Models
 */
class EducationDetail extends Model
{
	use SoftDeletes;
	protected $table = 'education_details';

	protected $casts = [
		'gpa' => 'float',
		'job_seeker_id' => 'int'
	];

	protected $fillable = [
		'id',
		'university',
		'degree',
		'major',
		'graduation_year',
		'gpa',
		'job_seeker_id'
	];

	public function job_seeker()
	{
		return $this->belongsTo(JobSeeker::class);
	}
}
