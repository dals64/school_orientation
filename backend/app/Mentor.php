<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
   
public function careers()
{
    return $this->belongsToMany('App\Career');
}
}
