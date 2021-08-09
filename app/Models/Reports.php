<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    use HasFactory;

    protected $table = "reports";

    protected $fillable = [
        'user_id',
        
        'market_report_download_file',
        'market_report_download_file_path',


        'month',
        'monthly_report_download_file',
        'monthly_report_download_file_path',
       
        'post_boosting_insights_chart_image',
        'post_boosting_insights_chart_image_path',

        'ideal_customer_image',
        'ideal_customer_image_path'

        
        
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
