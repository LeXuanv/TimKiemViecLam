<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authentication;
use Laravel\Sanctum\HasApiTokens;

/**
 * Class User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property int $role_id
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @property Role $role
 * @property Collection|Admin[] $admins
 * @property Collection|Company[] $companies
 * @property Collection|JobSeeker[] $job_seekers
 *
 * @package App\Models
 */
class User extends Authentication
{
    use SoftDeletes, HasApiTokens;

    protected $table = 'users';

    protected $casts = [
        'email_verified_at' => 'datetime',
        'role_id' => 'int'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'role_id',
        'remember_token',
        'verification_code',
        'verification_code_expires_at'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function admins()
    {
        return $this->hasOne(Admin::class);
    }

    public function companies()
    {
        return $this->hasOne(Company::class);
    }

    public function job_seekers()
    {
        return $this->hasOne(JobSeeker::class);
    }

    public function isAdmin()
    {
        return $this->role->name === 'admin';
    }

    public function isCompany()
    {
        return $this->role->name === 'company';
    }

    public function isJobSeeker()
    {
        return $this->role->name === 'job_seeker';
    }
    public function getFullInfo(){
        return [
            'name' => $this->name,
            'email' => $this->email,
            'role_id' => $this->role_id,
            
        ];
    }
}
