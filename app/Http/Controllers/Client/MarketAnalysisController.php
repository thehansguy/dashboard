<?php

namespace App\Http\Controllers\Client;

use App\Models\User;
use App\Models\Audience;
use Illuminate\Http\Request;
use App\Models\MarketAnalysis;
use App\Http\Controllers\Controller;

class MarketAnalysisController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {   
        $uid = auth()->user()->id;    
        $users_data = auth()->user();
       
            if( MarketAnalysis::where('user_id',$uid)->first() ){

                $market_analysis_data = MarketAnalysis::where('user_id',$uid)->first();           
                $audience_data = Audience::where('user_id',$uid)->latest()->first();
                

                return view('client.market_analysis',[
                 'users_data' => $users_data,
                 'audience_data'=>$audience_data,
                'market_analysis_data' => $market_analysis_data 
            ]);   
        }
    else{

            return view('client404.market_analysis',[
                'users_data' => $users_data 
            ]);
           
        }     

        
    }


    public function e404()
    {                 
        return view('client404.market_analysis');
       
    }
}
