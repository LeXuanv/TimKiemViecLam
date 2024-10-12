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
 * Class JobVacancy
 * 
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property float|null $salary
 * @property string|null $employment_type
 * @property Carbon|null $application_deadline
 * @property bool $is_published
 * @property int $company_id
 * @property int $category_id
 * @property int $job_position_id
 * @property string|null $address
 * @property string|null $province_code
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property Category $category
 * @property Company $company
 * @property JobPosition $job_position
 * @property Province|null $province
 * @property Collection|Bookmark[] $bookmarks
 * @property Collection|JobApplication[] $job_applications
 *
 * @package App\Models
 */
class JobVacancy extends Model
{
	use SoftDeletes;
	protected $table = 'job_vacancies';

	protected $casts = [
		'salary' => 'float',
		'application_deadline' => 'datetime',
		'is_published' => 'bool',
		'company_id' => 'int',
		'category_id' => 'int',
		'job_position_id' => 'int'
	];

	protected $fillable = [
		'title',
		'description',
		'salary',
		'employment_type',
		'application_deadline',
		'is_published',
		'company_id',
		'category_id',
		'job_position_id',
		'address',
		'province_code'
	];

	public function category()
	{
		return $this->belongsTo(Category::class);
	}

	public function company()
	{
		return $this->belongsTo(Company::class);
	}

	public function job_position()
	{
		return $this->belongsTo(JobPosition::class);
	}

	public function province()
	{
		return $this->belongsTo(Province::class, 'province_code');
	}

	public function bookmarks()
	{
		return $this->hasMany(Bookmark::class);
	}

	public function job_applications()
	{
		return $this->hasMany(JobApplication::class);
	}
}
