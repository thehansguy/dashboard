<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Our_Latest_Package extends Model
{
    use HasFactory;

    protected $table = "our__latest__packages";

    protected $fillable = [
        'user_id',

        'our_latest_package_image',
        'our_latest_package_image_path'
        
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
