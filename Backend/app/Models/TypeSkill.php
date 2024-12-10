<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeSkill extends Model
{
    protected $table = 'skills';

	protected $fillable = [
		'name',
	];
    public function skills()
	{
		return $this->hasMany(Skill::class, 'type_skill_id');
	}
}
