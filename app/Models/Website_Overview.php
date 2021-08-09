<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Website_Overview extends Model
{
    use HasFactory;

    protected $table = "website__overviews";

    protected $fillable = [
        'user_id',

        'website_overview_image',
        'website_overview_image_path'
            
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
