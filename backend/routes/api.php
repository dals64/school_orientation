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
Route::post('/speciality/update/', 'SpecialityController@update');
Route::post('/speciality/delete/', 'SpecialityController@destroy');
Route::post('/speciality/index/', 'SpecialityController@index');
Route::post('/speciality/careers/', 'SpecialityController@getCareers');
Route::get('/speciality', 'SpecialityController@getAll');

Route::post('/school/register/', 'SchoolController@create');
Route::post('/school/update/', 'SchoolController@update');
Route::post('/school/delete/', 'SchoolController@destroy');
Route::post('/school/outlets/', 'SchoolController@getOutlets');
Route::get('/school', 'SchoolController@getAll');

Route::post('/career/register/', 'CareerController@create');
Route::post('/career/update/', 'CareerController@update');
Route::post('/career/schools/', 'CareerController@getSchools');
Route::post('/career/mentors/', 'CareerController@getMentors');
Route::post('/career/delete/', 'CareerController@destroy');
Route::get('/career', 'CareerController@getAll');

Route::post('/outlet/register/','OutletController@create');
Route::post('/outlet/update/','OutletController@update');
Route::post('/outlet/delete/','OutletController@destroy');
Route::get('/outlet', 'OutletController@getAll');

Route::post('/mentor/register/','MentorController@create');
Route::post('/mentor/update/','MentorController@update');
Route::post('/mentor/delete/','MentorController@destroy');
Route::get('/mentor', 'MentorController@getAll');

Route::post('/book/register/','BookController@create');
Route::post('/book/update/','BookController@update');
Route::post('/book/delete/','BookController@destroy');
Route::get('/book', 'BookController@getAll');




Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});