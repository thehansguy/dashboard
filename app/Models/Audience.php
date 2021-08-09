<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audience extends Model
{
    use HasFactory;


    protected $table = "audiences";

    protected $fillable = [
        'user_id',

        'accounts_reached',
        'total_followers',
        'content_interaction',
        'likes',

        'facebook_page_likes',
        'instagram_followers',
        'instagram_reach',
        'impressions',

        'new_audience',

        'total_audience',

    
        'top_locations_image',
        'top_locations_image_path',

        'age_range_image',
        'age_range_image_path',

        'gender_image',
        'gender_image_path',

        'pie_chart_image', 
        'pie_chart_image_path',

        'histogram_image',
        'histogram_image_path'
     
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
