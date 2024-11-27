<?php

use Illuminate\Support\Facades\Route;



Route::group([
    'prefix' => 'admin',
    'namespace' => 'App\Modules\JobVacancy\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['prefix' => 'job-vacancy'], function () {
        Route::get('/', 'JobVacancyController@index');
        Route::get('/show/{id}', 'JobVacancyController@show');
        Route::get('/search', 'JobVacancyController@search');
        Route::get('/get-publish/{companyId}', 'JobVacancyController@indexJobPublishWithCompanyId');
        
        Route::delete('/delete/{id}', 'JobVacancyController@delete');
    });
});

Route::group([
    'prefix' => 'user',
    'namespace' => 'App\Modules\JobVacancy\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['prefix' => 'job-vacancy'], function () {
        Route::get('/', 'JobVacancyController@index');
        Route::get('/show/{id}', 'JobVacancyController@show');
        Route::get('/search', 'JobVacancyController@search');
        Route::get('/search-job-by-company', 'JobVacancyController@searchJobInCompany');
        Route::get('/get-publish/{companyId}', 'JobVacancyController@indexJobPublishWithCompanyId');
    });
});

Route::group([
    'prefix' => 'company/job-vacancy',
    'namespace' => 'App\Modules\JobVacancy\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/', 'JobVacancyController@index');
        Route::get('/get-publish', 'JobVacancyController@indexJobPublishByCompany');
        Route::put('/update/{id}', 'JobVacancyController@update');
        Route::post('/store', 'JobVacancyController@store');
        Route::delete('/destroy/{id}', 'JobVacancyController@destroy');
        Route::get('/show/{id}', 'JobVacancyController@show');
        Route::get('/search', 'JobVacancyController@search');
        Route::get('/search-job-by-company', 'JobVacancyController@searchJobInCompany');

    });
});
