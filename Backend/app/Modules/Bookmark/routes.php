<?php

use App\Modules\Address\Controllers\ProvinceController;
use App\Modules\Bookmark\Controllers\BookmarkController;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'user/jobs',
    'namespace' => 'App\Modules\Bookmark\Controllers',
    'middleware' => ['api']
], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/bookmarks', [BookmarkController::class, 'index']);
        Route::post('/{job_vacancy}/bookmark', [BookmarkController::class, 'toggleBookmark']);
        Route::get('/{job_vacancy}/check-bookmark', [BookmarkController::class, 'checkBookmark']);

    });
});
