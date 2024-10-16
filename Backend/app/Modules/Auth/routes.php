<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/',
    'namespace' => 'App\Modules\Auth\Controllers',
    'middleware' => ['api']
], function () {
    Route::post('/login', 'AuthController@login')->name('login');
    Route::post('/register', 'AuthController@register');

    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::post('/logout', 'AuthController@logout');
        Route::get('/user', 'AuthController@user');
    });
});
