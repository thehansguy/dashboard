<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

use App\Http\Controllers\Client\DashboardController;

use App\Http\Controllers\Admin\AudienceCrudController;
use App\Http\Controllers\Client\PaymentController;
use App\Http\Controllers\Client\ReportsController;
use App\Http\Controllers\Client\AudienceController;
use App\Http\Controllers\Client\MarketAnalysisController;

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\InvoicesCrudController;
use App\Http\Controllers\Admin\MarketAnalysisCrudController;
use App\Http\Controllers\Admin\OurLatestPackageController;
use App\Http\Controllers\Admin\PaymentCrudController;
use App\Http\Controllers\Admin\PortalUsersCrud;
use App\Http\Controllers\Admin\ReceiptsCrudController;
use App\Http\Controllers\Admin\ReportsCrudController;
use App\Http\Controllers\Admin\TrendsController;
use App\Http\Controllers\Admin\WebsiteOverviewController;


// auth
Route::get('/', [LoginController::class,'index'])->name('login');
Route::post('/', [LoginController::class,'process_login']);

Route::get('/register', [RegisterController::class,'index'])->name('register');
Route::post('/register', [RegisterController::class,'process_registration']);

Route::post('/logout', [LogoutController::class,'process_logout'])->name('logout');



//client views
Route::get('/dashboard',[DashboardController::class,'index'])->name('client_dashboard');
Route::get('/dashboard404',[DashboardController::class,'e404'])->name('client404_dashboard');

//more client controllers
Route::get('/audiences',[AudienceController::class,'index'])->name('client_audience');
Route::get('/audience404',[AudienceController::class,'e404'])->name('client404_audience');

Route::get('/marketanalysis',[MarketAnalysisController::class,'index'])->name('client_market_analysis');
Route::get('/marketanalysis404',[MarketAnalysisController::class,'e404'])->name('client404_market_analysis');

Route::get('/reports',[ReportsController::class,'index'])->name('client_reports');
Route::get('/reports404',[ReportsController::class,'e404'])->name('client404_reports');

Route::get('/payments',[PaymentController::class,'index'])->name('client_payment');
Route::get('/payment404',[PaymentController::class,'e404'])->name('client404_payment');


//admin views
Route::resource('/admin',AdminDashboardController::class);
//main admin controllers
Route::resource('/users', PortalUsersCrud::class);
Route::resource('/admin_audiences', AudienceCrudController::class);
Route::resource('/admin_market_analysis', MarketAnalysisCrudController::class);
Route::resource('/admin_reports', ReportsCrudController::class);
Route::resource('/admin_payments', PaymentCrudController::class);
// auxillary admin controllers
Route::resource('/admin_blogs',BlogController::class);
Route::resource('/admin_our_latest_packages', OurLatestPackageController::class);
Route::resource('/admin_trends',TrendsController::class);
Route::resource('/admin_website_overviews',WebsiteOverviewController::class);
Route::resource('/admin_invoices',InvoicesCrudController::class);
Route::resource('/admin_receipts',ReceiptsCrudController::class);





