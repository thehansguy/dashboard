<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketAnalysis extends Model
{
    use HasFactory;

    protected $table = "market_analyses";

    protected $fillable = [
        'user_id',

        'accounts_reached',
        'interaction',
        'total_followers',
        'likes',
        
        'competitor_accounts_reached',
        'competitor_interaction',
        'competitor_total_followers',
        'competiter_likes',
        
        'market_size_chart_image',
        'market_size_chart_image_path'
       
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
