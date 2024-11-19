<?php

use App\Modules\JobPosition\Controllers\JobPositionController;
use Illuminate\Support\Facades\Route;




Route::prefix('admin')->as('admin.')->group(function () {
    Route::prefix('job-position')->as('job-position.')->group(function () {
        Route::get('/', [JobPositionController::class, 'index'])->name('index');
        Route::get('/create', [JobPositionController::class, 'create'])->name('create');
        Route::post('/store', [JobPositionController::class, 'store'])->name('store');
        Route::delete('/delete/{id}', [JobPositionController::class, 'delete'])->name('delete');
        
    });
    Route::get('/job-position/search/{name}', [JobPositionController::class, 'search']);

});
