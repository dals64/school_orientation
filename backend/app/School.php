<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    public function outlets()
    {
        return $this->belongsToMany('App\Outlet', 'outlet_school', 'school_id', 'outlet_id');
    }
}
