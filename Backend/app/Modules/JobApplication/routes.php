<?php


use App\Modules\JobApplication\Controllers\JobApplicationController;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'user/jobs',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::post('/{job_vacancy}/apply', [JobApplicationController::class, 'toggleApply']);
        Route::get('/applied', [JobApplicationController::class, 'indexOfSeeker']);
        Route::get('/{job_vacancy}/check-application', [JobApplicationController::class, 'checkApplication']);

    });
});
Route::group([
    'prefix' => 'company/jobs',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::get('/{job_vacancy}/applications', [JobApplicationController::class, 'index']);
        Route::post('/{job_vacancy}/applications/{job_seeker_id}/accept', [JobApplicationController::class, 'accept']);

    });
});