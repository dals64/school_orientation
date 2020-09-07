<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Speciality;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/speciality/register/', 'SpecialityController@create');
Route::get('/speciality', 'SpecialityController@getAll');

Route::post('/school/register/', 'SchoolController@create');
Route::get('/school', 'SchoolController@getAll');

Route::post('/career/register/', 'CareerController@create');
Route::get('/career', 'CareerController@getAll');

Route::post('/outlet/register/','OutletController@create');
Route::get('/outlet', 'OutletController@getAll');

Route::post('/mentor/register/', 'MentorController@create');
Route::get('/mentor', 'MentorController@getAll');