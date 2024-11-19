<?php

use App\Modules\Category\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;






Route::group([
    'prefix' => 'api/',
    'namespace' => 'App\Modules\Category\Controllers',
    'middleware' => []
], function () {
    // Province routes
    Route::prefix('category')->as('category.')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('index');
        Route::get('/create', [CategoryController::class, 'create'])->name('create');
        Route::post('/store', [CategoryController::class, 'store'])->name('store');
        Route::delete('/delete/{id}', [CategoryController::class, 'destroy'])->name('delete');
        
    });
    Route::get('/category/search/{name}', [CategoryController::class, 'search']);
});
