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
    Route::get('/get-all', [JobSeekerController::class, 'getAll']);
    Route::get('/download-cv/{id}', [JobSeekerController::class, 'downloadCv']);
    Route::get('/view-cv/{id}', [JobSeekerController::class, 'viewCv']);
    Route::get('/get-recommended-job/{id}', [JobSeekerController::class, 'getRecommendedJobs']);

    Route::group(['middleware' => ['auth:sanctum', 'job_seeker']], function () {

        Route::post('/upload-logo', [JobSeekerController::class, 'uploadLogo']);
        Route::post('/upload-cv', [JobSeekerController::class, 'uploadCv']);
//        Skill
        Route::post('/skill/update', [JobSeekerController::class, 'updateSkill']);

//        Education Detail
        Route::post('/education-detail/store', [JobSeekerController::class, 'storeEducationDetail']);
        Route::post('/education-detail/update', [JobSeekerController::class, 'updateEducationDetail']);
        Route::post('/education-detail/delete', [JobSeekerController::class, 'destroyEducationDetail']);
    });
});


Route::get('job-seeker/create-cv/{id}', [JobSeekerController::class, 'createCvById'])->name('create-cv-by-id');
Route::get('job-seeker/download-cv/{id}', [JobSeekerController::class, 'downloadCvById'])->name('download-cv-by-id');
