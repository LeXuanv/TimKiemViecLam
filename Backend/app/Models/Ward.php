<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Ward
 * 
 * @property string $code
 * @property string $name
 * @property string|null $name_en
 * @property string|null $full_name
 * @property string|null $full_name_en
 * @property string|null $code_name
 * @property string|null $district_code
 * 
 * @property District|null $district
 * @property Collection|Admin[] $admins
 * @property Collection|Company[] $companies
 * @property Collection|JobSeeker[] $job_seekers
 *
 * @package App\Models
 */
class Ward extends Model
{
	protected $table = 'wards';
	protected $primaryKey = 'code';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'name',
		'name_en',
		'full_name',
		'full_name_en',
		'code_name',
		'district_code'
	];

	public function district()
	{
		return $this->belongsTo(District::class, 'district_code');
	}

	public function admins()
	{
		return $this->hasMany(Admin::class, 'ward_code');
	}

	public function companies()
	{
		return $this->hasMany(Company::class, 'ward_code');
	}

	public function job_seekers()
	{
		return $this->hasMany(JobSeeker::class, 'ward_code');
	}
}
