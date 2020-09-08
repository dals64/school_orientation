<?php

namespace App\Http\Controllers;

use App\Career;
use App\School;
Use App\Mentor;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $career = new Career;
        $career->name = $request->input('name');
        $career->description = $request->input('description');
        try {
            $career->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getAll(){
        return Career::all();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $career = Career::find($request->input('id'));
        $career->name = $request->input('name');
        $career->description = $request->input('description');
        try {
            $career->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        
        if($request->input('school')!=null){
            $school = School::find($request->input('school'));
            try {
                $career->schools()->attach($school);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }
        
        if($request->input('schoolDel')!=null){
            $school = School::find($request->input('schoolDel'));
            try {
                $career->schools()->detach($school);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        if($request->input('mentor')!=null){
            $mentor = Mentor::find($request->input('mentor'));
            try {
                $career->mentors()->attach($mentor);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }
        
        if($request->input('mentorDel')!=null){
            $mentor = Mentor::find($request->input('mentorDel'));
            try {
                $career->mentors()->detach($mentor);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->input('id');
        try {
            $career=Career::where('id',$id)->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        return 'success';
    }
}
