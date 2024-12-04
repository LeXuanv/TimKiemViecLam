<?php

use App\Modules\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/user',
    'namespace' => 'App\Modules\User\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/show', [UserController::class, 'show']);
        Route::get('/edit', [UserController::class, 'edit']);
        Route::post('/update', [UserController::class, 'update']);
        Route::delete('/delete', [UserController::class, 'destroy']);
    });
    Route::get('/get-all', action: [UserController::class, 'getAll']);
    Route::delete('/delete-user/{userId}', action: [UserController::class, 'deleteUser']);

});
