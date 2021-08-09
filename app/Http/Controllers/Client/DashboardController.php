<?php

namespace App\Http\Controllers\Client;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Audience;
use App\Models\Our_Latest_Package;
use App\Models\Reports;
use App\Models\Trends;
use App\Models\Website_Overview;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {    
        
        
        $uid = auth()->user()->id;       
        $users_data = auth()->user();

        if( 
            Audience::where('user_id',$uid)->first() &&
            Reports::where('user_id',$uid)->first() &&
            Website_Overview::where('user_id',$uid)->first() &&            
            Trends::where('user_id',$uid)->first() &&
            Blog::where('user_id',$uid)->first() &&
            Our_Latest_Package::where('user_id',$uid)->first()          
            
                        
            ){

            $audience_data = Audience::where('user_id',$uid)->latest()->first();
            $report_data = Reports::where('user_id',$uid)->latest()->first();
            $website_overview_data = Website_Overview::where('user_id',$uid)->latest()->first();
            $trends_data = Trends::where('user_id',$uid)->latest()->first();
            $blogs_data = Blog::where('user_id',$uid)->latest()->first();
            $our_latest_package_data = Our_Latest_Package::where('user_id',$uid)->latest()->first();

            return view('client.dashboard',[
                
                'users_data' => $users_data,    


                'audience_data' => $audience_data,            
                'report_data' => $report_data,
                'website_overview_data' => $website_overview_data,
                'trends_data' => $trends_data,
                'blogs_data' => $blogs_data,
                'our_latest_package_data' => $our_latest_package_data
           
        ]);   
        }
        else{

            return view('client404.dashboard',[
                'users_data' => $users_data 
            ]);
           
        }
     
    }

    public function e404()
    {                 
        return view('client404.dashboard');
       
    }


}
