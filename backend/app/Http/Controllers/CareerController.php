<?php

namespace App\Http\Controllers;

use App\Career;
use App\School;
Use App\Mentor;
Use App\Personnality;
Use App\Speciality;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function getSchools(Request $request){
        $career = Career::find($request->input('id'));
        return $career->schools()->getResults();
    }

    public function getMentors(Request $request){
        $career = Career::find($request->input('id'));
        return $career->mentors()->getResults();
    }

    public function filter(Request $request){

        if ($request->input('perso2')!="") {

            $pers = Personnality::where('name', $request->input('perso1'))->first();
            $pers2 = Personnality::where('name', $request->input('perso2'))->first();
            $result1 = DB::table('career_personnality')
            ->join('career_speciality', 'career_speciality.career_id', '=', 'career_personnality.career_id')
            ->select('career_speciality.career_id')
            ->where('career_speciality.speciality_id', '=', $request->input('speciality'))
            ->where('career_personnality.personnality_id', '=', $pers->id)
            ->get();

            $result2 = DB::table('career_personnality')
            ->join('career_speciality', 'career_speciality.career_id', '=', 'career_personnality.career_id')
            ->select('career_speciality.career_id')
            ->where('career_speciality.speciality_id', '=', $request->input('speciality'))
            ->where('career_personnality.personnality_id', '=', $pers2->id)
            ->get();

            $ids = array();

            foreach ($result1 as $career) {
                $ids[] = $career->career_id;
            }

            foreach ($result2 as $career) {
                if (!in_array($career->career_id, $ids)) {
                    $ids[] = $career->career_id;
                }
            }

            $result = Career::find($ids);

            return $result;

        }else{

            $pers = Personnality::where('name', $request->input('perso1'))->first();

            $result1 = DB::table('career_personnality')
            ->join('career_speciality', 'career_speciality.career_id', '=', 'career_personnality.career_id')
            ->select('career_speciality.career_id')
            ->where('career_speciality.speciality_id', '=', $request->input('speciality'))
            ->where('career_personnality.personnality_id', '=', $pers->id)
            ->get();
            $ids = array();

            foreach ($result1 as $career) {
                $ids[] = $career->career_id;
            }

            $result = Career::find($ids);

            return $result;

        }
        
    }
}
