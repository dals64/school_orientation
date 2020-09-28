<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
    public function entreprises()
    {
        return $this->belongsToMany('App\Entreprise', 'enterprise_outlet', 'outlet_id', 'entreprise_id');
    }
}
