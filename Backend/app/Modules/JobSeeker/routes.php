<?php

use App\Modules\JobSeeker\Controllers\JobSeekerController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/job-seeker',
    'namespace' => 'App\Modules\JobSeeker\Controllers',
    'middleware' => ['api']
], function () {
    Route::get('/skill/{id}', [JobSeekerController::class, 'getSkill']);
    Route::get('/education-detail/{id}', [JobSeekerController::class, 'getEducationDetail']);

    Route::group(['middleware' => ['api-auth', 'job_seeker']], function () {

//        Skill
        Route::post('/skill/update', [JobSeekerController::class, 'updateSkill']);

//        Education Detail
        Route::post('/education-detail/store', [JobSeekerController::class, 'storeEducationDetail']);
        Route::post('/education-detail/update/', [JobSeekerController::class, 'updateEducationDetail']);
        Route::post('/education-detail/delete/', [JobSeekerController::class, 'destroyEducationDetail']);
    });
});
