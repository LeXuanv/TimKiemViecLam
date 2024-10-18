<?php

use App\Http\Middleware\Cors;

Route::group([
    'prefix' => 'api/',
    'namespace' => 'App\Modules\Address\Controllers',
    'middleware' => [Cors::class]
], function () {
    // Province routes
    Route::prefix('province')->as('province.')->group(function () {
        Route::get('/', 'ProvinceController@index')->name('index');
        Route::get('/search/{name}', 'ProvinceController@search');
    });

    // District routes
    Route::prefix('district')->as('district.')->group(function () {
        Route::get('/', 'DistrictController@index')->name('index');
        Route::get('/search/{name}', 'DistrictController@search');
    });

    // Ward routes
    Route::prefix('ward')->as('ward.')->group(function () {
        Route::get('/', 'WardController@index')->name('index');
        Route::get('/search/{name}', 'WardController@search');
    });

    // Address routes
    Route::get('/province', 'AddressController@getProvinces');
    Route::get('/district/{province_code}', 'AddressController@getDistricts');
    Route::get('/ward/{district_code}', 'AddressController@getWards');
});
