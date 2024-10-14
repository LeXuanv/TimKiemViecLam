<?php

use App\Modules\Address\Controllers\ProvinceController;
use Illuminate\Support\Facades\Route;




Route::prefix('admin')->as('admin.')->group(function () {
    Route::prefix('category')->as('category.')->group(function () {
        Route::get('/', [ProvinceController::class, 'index'])->name('index');
        Route::get('/create', [ProvinceController::class, 'create'])->name('create');
        Route::post('/store', [ProvinceController::class, 'store'])->name('store');
        Route::delete('/delete/{id}', [ProvinceController::class, 'delete'])->name('delete');
        
    });
    Route::get('/category/search/{name}', [ProvinceController::class, 'search']);

});
