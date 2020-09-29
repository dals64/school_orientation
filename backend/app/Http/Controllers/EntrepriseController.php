<?php

namespace App\Http\Controllers;

use App\Entreprise;
use Illuminate\Http\Request;

class EntrepriseController extends Controller
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
        $entreprise = new Entreprise;
        $entreprise->name = $request->input('name');
        $entreprise->location = $request->input('location');
        $entreprise->site = $request->input('site');
        $entreprise->contact = $request->input('contact');

        try {
            $entreprise->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entreprise  $entreprise
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $entreprise = Entreprise::find($request->input('id'));

        $entreprise->name = $request->input('name');
        $entreprise->location = $request->input('location');
        $entreprise->site = $request->input('site');
        $entreprise->contact = $request->input('contact');

        try {
            $entreprise->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entreprise  $entreprise
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try {
            Entreprise::find($request->input('id'))->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getAll(){
        return Entreprise::all();
    }
}
