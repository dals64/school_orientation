<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Personnality extends Model
{
    public function careers(){
        return $this.belongsToMany('App\Career', 'career_personnality', 'personnality_id', 'career_id');
    }
}
