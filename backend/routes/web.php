<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\SpecialityController;
use App\Personnality;
use App\Speciality;
use App\Career;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Cast\Array_;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/career/test', function(){
    $spec = Speciality::find(1);
    $pers = Personnality::where('name','communicatif')->first();
    $result1 = DB::table('career_personnality')
    ->join('career_speciality', 'career_speciality.career_id', '=', 'career_personnality.career_id')
    ->select('career_speciality.career_id')
    ->where('career_speciality.speciality_id','=',$spec->id)
    ->where('career_personnality.personnality_id','=',$pers->id)
    ->get();

    $ids = array();

    foreach($result1 as $career){
        $ids[] = $career->career_id;
    }

    $result = Career::find($ids);
    return $result;
});