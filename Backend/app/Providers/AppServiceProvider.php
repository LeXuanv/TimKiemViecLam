<?php

namespace App\Providers;

use App\Repositories\Company\CompanyRepository;
use App\Repositories\Company\CompanyRepositoryImpl;
use App\Repositories\JobSeeker\JobSeekerRepository;
use App\Repositories\JobSeeker\JobSeekerRepositoryImpl;
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
