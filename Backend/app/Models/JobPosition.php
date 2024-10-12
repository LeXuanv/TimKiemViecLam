<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class JobPosition
 * 
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|JobVacancy[] $job_vacancies
 *
 * @package App\Models
 */
class JobPosition extends Model
{
	protected $table = 'job_positions';

	protected $fillable = [
		'name'
	];

	public function job_vacancies()
	{
		return $this->hasMany(JobVacancy::class);
	}
}
