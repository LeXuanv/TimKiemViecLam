<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Province
 * 
 * @property string $code
 * @property string $name
 * @property string|null $name_en
 * @property string $full_name
 * @property string|null $full_name_en
 * @property string|null $code_name
 * 
 * @property Collection|District[] $districts
 * @property Collection|JobVacancy[] $job_vacancies
 *
 * @package App\Models
 */
class Province extends Model
{
	protected $table = 'provinces';
	protected $primaryKey = 'code';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'name',
		'name_en',
		'full_name',
		'full_name_en',
		'code_name'
	];

	public function districts()
	{
		return $this->hasMany(District::class, 'province_code');
	}

	public function job_vacancies()
	{
		return $this->hasMany(JobVacancy::class, 'province_code');
	}
}
