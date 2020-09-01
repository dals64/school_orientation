<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{   
    public function mentors()
    {
        return $this->belongsToMany('App\Mentor');
    }
}
