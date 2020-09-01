<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{   
    public function schools()
    {
        return $this->belongsToMany('App\School', 'career_school', 'career_id', 'school_id');
    }

    public function mentors()
    {
        return $this->belongsToMany('App\Mentor', 'career_mentor', 'career_id', 'mentor_id');
    }
}
