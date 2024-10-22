<?php

use App\Modules\JobSeeker\Controllers\JobSeekerController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/job-seeker',
    'namespace' => 'App\Modules\JobSeeker\Controllers',
    'middleware' => ['api']
], function () {
    Route::get('/skill/{id}', [JobSeekerController::class, 'getSkill']);
    Route::group(['middleware' => ['api-auth', 'job_seeker']], function () {
        Route::post('/update-skill', [JobSeekerController::class, 'updateSkill']);
    });
});
