<?php

use App\Modules\JobVacancy\Controllers\JobVacancyController;
use Illuminate\Support\Facades\Route;




Route::prefix('admin')->as('admin.')->group(function () {
    Route::prefix('job-vacancy')->as('job-vacancy.')->group(function () {
        Route::get('/', [JobVacancyController::class, 'index'])->name('index');
        Route::delete('/delete/{id}', [JobVacancyController::class, 'delete'])->name('delete');

    });

});
Route::prefix('user')->as('user.')->group(function () {
    Route::prefix('job-vacancy')->as('job-vacancy.')->group(function () {
        Route::get('/', [JobVacancyController::class, 'index'])->name('index');

    });

});
Route::prefix('company')->as('company.')->group(function () {
    Route::prefix('job-vacancy')->as('job-vacancy.')->group(function () {
        Route::get('/', [JobVacancyController::class, 'index'])->name('index');
        Route::get('/create', [JobVacancyController::class, 'create'])->name('create');
        Route::post('/store', [JobVacancyController::class, 'store'])->name('store');
        Route::delete('/delete/{id}', [JobVacancyController::class, 'delete'])->name('delete');
        
    });

});
Route::prefix('job-vacancy')->as('job-vacancy.')->group(function () {
    Route::get('/', [JobVacancyController::class, 'index'])->name('index');
    Route::get('/show/{id}', [JobVacancyController::class, 'show'])->name('show');
});
