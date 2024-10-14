<?php

use App\Modules\Address\Controllers\ProvinceController;
use App\Modules\Address\Controllers\DistrictController;
use App\Modules\Address\Controllers\WardController;
use Illuminate\Support\Facades\Route;

// Định nghĩa hằng số cho các chuỗi lặp lại
const CREATE_ROUTE = '/create';
const STORE_ROUTE = '/store';
const DELETE_ROUTE = '/delete/{id}';

Route::prefix('admin')->as('admin.')->group(function () {
    Route::prefix('province')->as('province.')->group(function () {
        Route::get('/', [ProvinceController::class, 'index'])->name('index');
        Route::get(CREATE_ROUTE, [ProvinceController::class, 'create'])->name('create');
        Route::post(STORE_ROUTE, [ProvinceController::class, 'store'])->name('store');
        Route::delete(DELETE_ROUTE, [ProvinceController::class, 'delete'])->name('delete');
    });
    
    Route::get('/province/search/{name}', [ProvinceController::class, 'search']);
    
    Route::prefix('district')->as('district.')->group(function () {
        Route::get('/', [DistrictController::class, 'index'])->name('index');
        Route::get(CREATE_ROUTE, [DistrictController::class, 'create'])->name('create');
        Route::post(STORE_ROUTE, [DistrictController::class, 'store'])->name('store');
        Route::delete(DELETE_ROUTE, [DistrictController::class, 'delete'])->name('delete');
    });
    
    Route::get('/district/search/{name}', [DistrictController::class, 'search']);
    
    Route::prefix('ward')->as('ward.')->group(function () {
        Route::get('/', [WardController::class, 'index'])->name('index');
        Route::get(CREATE_ROUTE, [WardController::class, 'create'])->name('create');
        Route::post(STORE_ROUTE, [WardController::class, 'store'])->name('store');
        Route::delete(DELETE_ROUTE, [WardController::class, 'delete'])->name('delete');
    });
    
    Route::get('/ward/search/{name}', [WardController::class, 'search']);
});
