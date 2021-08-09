<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trends extends Model
{
    use HasFactory;

    protected $table = "trends";

    protected $fillable = [
        'user_id',

        'monday',
        'tuesday',
        'thursday',
        'friday',
        'saturday'
     
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
