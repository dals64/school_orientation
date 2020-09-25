<?php

namespace App\Http\Controllers;

use App\Personnality;
use App\Career;
use Illuminate\Http\Request;

class PersonnalityController extends Controller
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
        $pers = new Personnality;
        $pers->name = $request->input('name');
        $pers->description = $request->input('description');
        try {
            $pers->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Personnality  $personnality
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $pers = Personnality::find($request->input('id'));
        $pers->name = $request->input('name');
        $pers->description = $request->input('description');
        try {
            $pers->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        if ($request->input('career') != null) {
            $career = Career::find($request->input('school'));
            try {
                $pers->careers()->attach($career);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        if ($request->input('careerDel') != null) {
            $career = Career::find($request->input('careerDel'));
            try {
                $pers->careers()->detach($career);
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Personnality  $personnality
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->input('id');
        try {
            $pers = Personnality::where('id', $id)->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
        return 'success';
    }

    public function getAll()
    {
        return Personnality::all();
    }
}
