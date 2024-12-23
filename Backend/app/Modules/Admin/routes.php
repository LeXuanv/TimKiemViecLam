<?php

use App\Modules\Admin\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/admin',
    'namespace' => 'App\Modules\Admin\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
        Route::prefix('job-seeker')->group(function () {
            Route::get('/edit/{id}', [AdminController::class, 'editJobSeeker']);
            Route::post('/update/{id}', [AdminController::class, 'updateJobSeeker']);
            Route::post('/delete', [AdminController::class, 'deleteJobSeeker']);
        });
        Route::prefix('company')->group(function () {
            Route::get('/edit/{id}', [AdminController::class, 'editCompany']);
            Route::post('/update/{id}', [AdminController::class, 'updateCompany']);
            Route::post('/delete', [AdminController::class, 'deleteCompany']);
        });
    });
});
