<?php

namespace App\Http\Controllers;

use App\School;
use Illuminate\Http\Request;
use App\Outlet;

class SchoolController extends Controller
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
        $school = new School;
        $school->name = $request->input('name');
        $school->location = $request->input('location');
        $school->site = $request->input('site');
        $school->contact = $request->input('contact');

        try {
            $school->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getAll(){
        return School::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $school = School::find($request->input('id'));
        $school->name = $request->input('name');
        $school->location = $request->input('location');
        $school->site = $request->input('site');
        $school->contact = $request->input('contact');

        try {
            $school->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        
        if($request->input('outlet')!=null){
            $outlet = Outlet::find($request->input('outlet'));
            try {
                $school->outlets()->attach($outlet);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }
        
        if($request->input('schoolDel')!=null){
            $school = Outlet::find($request->input('outletDel'));
            try {
                $school->outlets()->detach($outlet);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->input('id');
        try {
            $school=School::where('id',$id)->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        return 'success';
    }
}
