<?php

use App\Modules\Skill\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api/skill',
    'namespace' => 'App\Modules\Skill\Controllers',
    'middleware' => ['api']
], function () {
    Route::get('/get', [SkillController::class, 'get']);
    Route::group(['middleware' => ['auth:sanctum', 'admin']], function () {
        Route::post('/store', [SkillController::class, 'store']);
        Route::post('/update', [SkillController::class, 'update']);
        Route::post('/delete', [SkillController::class, 'destroy']);
    });
});
