<?php

namespace App\Providers;

use App\Repositories\Company\CompanyRepository;
use App\Repositories\Company\CompanyRepositoryImpl;
use App\Repositories\EducationDetail\EducationDetailRepository;
use App\Repositories\EducationDetail\EducationDetailRepositoryImpl;
use App\Repositories\JobSeeker\JobSeekerRepository;
use App\Repositories\JobSeeker\JobSeekerRepositoryImpl;
use App\Repositories\Skill\SkillRepository;
use App\Repositories\Skill\SkillRepositoryImpl;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryImpl;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserRepository::class, UserRepositoryImpl::class);
        $this->app->bind(CompanyRepository::class, CompanyRepositoryImpl::class);
        $this->app->bind(JobSeekerRepository::class, JobSeekerRepositoryImpl::class);
        $this->app->bind(SkillRepository::class, SkillRepositoryImpl::class);
        $this->app->bind(EducationDetailRepository::class, EducationDetailRepositoryImpl::class);
        \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::except([
            '/*'
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
