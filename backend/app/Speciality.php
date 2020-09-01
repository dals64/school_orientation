<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Speciality extends Model
{
    public function careers()
    {
        return $this->belongsToMany('App\Career', 'career_speciality', 'speciality_id', 'career_id');
    }
}
