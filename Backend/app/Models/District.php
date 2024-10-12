<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class District
 * 
 * @property string $code
 * @property string $name
 * @property string|null $name_en
 * @property string|null $full_name
 * @property string|null $full_name_en
 * @property string|null $code_name
 * @property string|null $province_code
 * 
 * @property Province|null $province
 * @property Collection|Ward[] $wards
 *
 * @package App\Models
 */
class District extends Model
{
	protected $table = 'districts';
	protected $primaryKey = 'code';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'name',
		'name_en',
		'full_name',
		'full_name_en',
		'code_name',
		'province_code'
	];

	public function province()
	{
		return $this->belongsTo(Province::class, 'province_code');
	}

	public function wards()
	{
		return $this->hasMany(Ward::class, 'district_code');
	}
}
