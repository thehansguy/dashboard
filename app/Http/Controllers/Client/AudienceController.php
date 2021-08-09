<?php

namespace App\Http\Controllers\Client;

use App\Models\Audience;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AudienceController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {
        $uid = auth()->user()->id;    
        $users_data = auth()->user();


        if( Audience::where('user_id',$uid)->latest()->first() ){

            $audience_data = Audience::where('user_id',$uid)->latest()->first();
          
            // dd($audience_data->top_locations_image_path.$audience_data->top_locations_image);
            return view('client.audience',[

                'users_data' => $users_data, 

                'audience_data' => $audience_data 
        ]);   
        }
        else{

            return view('client404.audience',[
                'users_data' => $users_data, 
            ]);
           
           
        }        
       
    }

    public function e404()
    {                 
        return view('client404.audience');
       
    }
}
