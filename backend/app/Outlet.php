<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
    public function entreprises()
    {
        return $this->belongsToMany('App\Entreprise', 'entreprise_outlet', 'outlet_id', 'entreprise_id');
    }
}
