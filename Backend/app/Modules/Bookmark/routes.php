<?php

use App\Modules\Address\Controllers\ProvinceController;
use App\Modules\Bookmark\Controllers\BookmarkController;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'user',
    'namespace' => 'App\Modules\Bookmark\Controllers',
    'middleware' => ['auth:sanctum']
], function () {
    Route::prefix('jobs')->group(function () {
        Route::get('/user/bookmarks', [BookmarkController::class, 'index']);
        Route::post('/{job_vacancy}/bookmarks', [BookmarkController::class, 'toggleBookmark']);
    });
});
