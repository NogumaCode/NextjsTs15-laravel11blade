<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\SliderController;
use App\Http\Controllers\Backend\ServiceController;
use App\Http\Controllers\Backend\GatewayController;
use App\Http\Controllers\Backend\TestimonialController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\SiteSettingController;
use App\Http\Controllers\Backend\AboutPageController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/// Slider api //
Route::get('/sliders', [SliderController::class, 'ApiAllSlider']);

/// Service api //
Route::get('/services', [ServiceController::class, 'AllServices']);
Route::get('/service/{slug}', [ServiceController::class, 'getServiceBySlug']);

///  one api //
Route::get('/gateways', [GatewayController::class, 'ApiGateway']);
///  Two api //
Route::get('/gateway_services', [GatewayController::class, 'ApiGatewayService']);

///  Testimonial api //
Route::get('/gettestimonial', [TestimonialController::class, 'ApiGetTestimonial']);

///  Blog Category api //
Route::get('/blogcat', [BlogController::class, 'ApiBlogCat']);

///  Blog Post api //
Route::get('/allblog', [BlogController::class, 'ApiAllBlog']);
Route::get('/allblog/{slug}', [BlogController::class, 'ApiAllBlogSlug']);

///  Sitesetting api //
Route::get('/sitesetting', [SiteSettingController::class, 'ApiSiteSetting']);

///  Aboutus api //
Route::get('/aboutpage', [AboutPageController::class, 'ApiAboutPage']);
