<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Admin
 * 
 * @property int $id
 * @property string $name
 * @property string|null $phone_number
 * @property string|null $address
 * @property int $user_id
 * @property string|null $ward_code
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property User $user
 * @property Ward|null $ward
 *
 * @package App\Models
 */
class Admin extends Model
{
	use SoftDeletes;
	protected $table = 'admins';

	protected $casts = [
		'user_id' => 'int'
	];

	protected $fillable = [
		'name',
		'phone_number',
		'address',
		'user_id',
		'ward_code'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function ward()
	{
		return $this->belongsTo(Ward::class, 'ward_code');
	}
}
