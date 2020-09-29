<?php

namespace App\Http\Controllers;

use App\Outlet;
use App\School;
Use App\Career;
use App\Entreprise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OutletController extends Controller
{
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $outlet = new Outlet;
        $outlet->name = $request->input('name');
        $outlet->description = $request->input('description');

        try {
            $outlet->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getAll(){
        return Outlet::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Outlet  $outlet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $outlet = Outlet::find($request->input('id'));
        $outlet->name = $request->input('name');
        $outlet->description = $request->input('description');

        try {
            $outlet->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        if ($request->input('entreprise') != null) {
            $entreprise = Entreprise::find($request->input('entreprise'));
            try {
                $outlet->entreprises()->attach($entreprise);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        if ($request->input('entrepriseDel') != null) {
            $entreprise = Entreprise::find($request->input('entrepriseDel'));
            try {
                $outlet->entreprises()->detach($entreprise);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Outlet  $outlet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try {
            Outlet::where('id',$request->input('id'))->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getList(Request $request){
        $school = School::find($request->input('school'));
        $career = Career::find($request->input('career'));

        $result1 = DB::table('career_outlet')
        ->join('outlet_school', 'career_outlet.outlet_id', '=', 'outlet_school.outlet_id')
        ->select('outlet_school.outlet_id')
        ->where('career_outlet.career_id', '=', $career->id)
        ->where('outlet_school.school_id', '=', $school->id)
        ->get();

        return dd($result1);
    }
}
