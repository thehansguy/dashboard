<?php

namespace App\Http\Controllers\Client;

use App\Models\Reports;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReportsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {         
        $uid = auth()->user()->id;    
         $users_data = auth()->user();   

        if( Reports::where('user_id',$uid)->first() ){

            $report_data = Reports::where('user_id',$uid)->latest()->first();
          

            return view('client.reports',[
                'users_data' => $users_data,
            'report_data' => $report_data 
        ]);   
        }
        else{

           return view('client404.reports',[
                'users_data' => $users_data 
            ]);
           
        }     
       
    }

    public function e404()
    {                 
        return view('client404.reports');
       
    }
}
