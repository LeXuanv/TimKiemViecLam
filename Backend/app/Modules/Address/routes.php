<?php

use App\Modules\Address\Controllers\AddressController;
use App\Modules\Address\Controllers\ProvinceController;
use App\Modules\Address\Controllers\DistrictController;
use App\Modules\Address\Controllers\WardController;
use Illuminate\Support\Facades\Route;


Route::prefix('province')->as('province.')->group(function () {
    Route::get('/', [ProvinceController::class, 'index'])->name('index');
});

Route::get('/province/search/{name}', [ProvinceController::class, 'search']);

Route::prefix('district')->as('district.')->group(function () {
    Route::get('/', [DistrictController::class, 'index'])->name('index');
});

Route::get('/district/search/{name}', [DistrictController::class, 'search']);

Route::prefix('ward')->as('ward.')->group(function () {
    Route::get('/', [WardController::class, 'index'])->name('index');
});

Route::get('/ward/search/{name}', [WardController::class, 'search']);

Route::get('/province', [AddressController::class, 'getProvinces']);
Route::get('/district/{provinceId}', [AddressController::class, 'getDistricts']);
Route::get('/ward/{districtId}', [AddressController::class, 'getWards']);
