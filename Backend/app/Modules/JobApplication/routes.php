<?php


use App\Modules\JobApplication\Controllers\JobApplicationController;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'user',
    'namespace' => 'App\Modules\JobApplication\Controllers',
    'middleware' => ['auth:sanctum']
], function () {
    Route::prefix('jobs')->group(function () {
        Route::post('/{job_vacancy}/apply', [JobApplicationController::class, 'toggleApply']);
        Route::get('/applied', [JobApplicationController::class, 'indexOfSeeker']);


    });
});
Route::group([
    'prefix' => 'company',
    'namespace' => 'App\Modules\JobApplication\Controllers',
    'middleware' => ['auth:sanctum']
], function () {
    Route::prefix('jobs')->group(function () {

        Route::get('/{job_vacancy}/applications', [JobApplicationController::class, 'index']);
        Route::post('/{job_vacancy}/applications/{job_seeker_id}/accept', [JobApplicationController::class, 'accept']);

    });
});