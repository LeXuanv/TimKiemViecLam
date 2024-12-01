
<?php

use App\Modules\Company\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'api/company',
    'namespace' => 'App\Modules\Company\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum', 'company']], function () {
        Route::post('/upload-logo', [CompanyController::class, 'uploadLogo']);
    });
    Route::get('/get-all', [CompanyController::class, 'getAll']);
    Route::get('/show/{companyId}', [CompanyController::class,'getById']);
});
