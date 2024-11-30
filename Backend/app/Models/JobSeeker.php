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
 * Class JobSeeker
 *
 * @property int $id
 * @property string $name
 * @property string|null $gender
 * @property Carbon|null $birth_date
 * @property string|null $email
 * @property string|null $phone_number
 * @property string|null $experience
 * @property string|null $address
 * @property string|null $ward_code
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @property User $user
 * @property Ward|null $ward
 * @property Collection|Bookmark[] $bookmarks
 * @property Collection|EducationDetail[] $education_details
 * @property Collection|JobApplication[] $job_applications
 * @property Collection|Skill[] $skills
 *
 * @package App\Models
 */
class JobSeeker extends Model
{
	use SoftDeletes;
	protected $table = 'job_seekers';

	protected $casts = [
		'birth_date' => 'datetime',
		'user_id' => 'int'
	];

	protected $fillable = [
		'name',
		'gender',
		'birth_date',
		'email',
		'phone_number',
		'experience',
		'address',
		'ward_code',
		'user_id',
        'logo',
        'province_code',
        'district_code'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function ward()
	{
		return $this->belongsTo(Ward::class, 'ward_code');
	}

	public function bookmarks()
	{
		return $this->hasMany(Bookmark::class);
	}

	public function education_details()
	{
		return $this->hasMany(EducationDetail::class);
	}

	public function job_applications()
	{
		return $this->hasMany(JobApplication::class);
	}

	public function skills()
	{
		return $this->belongsToMany(Skill::class, 'job_seeker_skills')
					->withPivot('id')
					->withTimestamps();
	}

    public function getInfo()
    {
        return [
            'phone_number' => $this->phone_number,
            'address' => $this->address,
            'ward_code' => $this->ward_code,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date,
            'experience' => $this->experience,
            'logo' => url('storage/' . $this->logo),
        ];
    }
    public function getFullInfo()
    {
        return [
            'phone_number' => $this->phone_number,
            'address' => $this->address,
            'ward_code' => $this->ward_code,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date,
            'experience' => $this->experience,
        ];
    }
}
