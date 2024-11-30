
<?php
use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;

Route::post('/company/upload-logo', [CompanyController::class, 'uploadLogo']);

