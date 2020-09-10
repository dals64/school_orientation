<?php

namespace App\Http\Controllers;

use App\Speciality;
use App\Career;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $spec = Speciality::find($request->input('id'));
        return $spec;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $spec = new Speciality;
        $spec->name = $request->input('name');
        try {
            $spec->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

   public function getAll(){
       return Speciality::all();
   }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Speciality  $speciality
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $spec = Speciality::find($request->input('id'));
        $spec->name = $request->input('name');
        try {
            $spec->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        
        if($request->input('career')!=null){
            $career = Career::find($request->input('career'));
            try {
                $spec->careers()->attach($career);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }
        
        if($request->input('careerDel')!=null){
            $career = Career::find($request->input('careerDel'));
            try {
                $spec->careers()->detach($career);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        return 'success';

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Speciality  $speciality
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->input('id');
        try {
            $spec=Speciality::where('id',$id)->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        return 'success';
    }

    public function getCareers(Request $request){
        $spec = Speciality::find($request->input('id'));
        return $spec->careers()->getResults();
    }

    public function test(){
        $spec = Speciality::find(2);
        return dd($spec->careers()->getResults());
    }
}
