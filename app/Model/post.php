<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    protected $fillable = [
        'title', 'description'
    ];
}
