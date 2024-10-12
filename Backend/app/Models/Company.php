<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Company
 * 
 * @property int $id
 * @property string $name
 * @property string|null $email
 * @property string|null $phone_number
 * @property string|null $address
 * @property string|null $ward_code
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property User $user
 * @property Ward|null $ward
 * @property Collection|JobVacancy[] $job_vacancies
 *
 * @package App\Models
 */
class Company extends Model
{
	use SoftDeletes;
	protected $table = 'companies';

	protected $casts = [
		'user_id' => 'int'
	];

	protected $fillable = [
		'name',
		'email',
		'phone_number',
		'address',
		'ward_code',
		'user_id'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function ward()
	{
		return $this->belongsTo(Ward::class, 'ward_code');
	}

	public function job_vacancies()
	{
		return $this->hasMany(JobVacancy::class);
	}
}
