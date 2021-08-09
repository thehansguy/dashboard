<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\receipts;
use Illuminate\Http\Request;

class ReceiptsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {  
        $uid = auth()->user()->id;    
         $users_data = auth()->user();    

            if( Receipts::where('user_id',$uid)->first() ){

                $receipt_data = Receipts::latest()
                ->where('user_id',$uid)
                ->first();
            

                return view('client.payment',[
                    'users_data' => $users_data,
                'receipt_data' => $receipt_data 
            ]);   
        }
    else{

           return view('client404.payment',[
                'users_data' => $users_data 
            ]);
           
        }            
        
    }


    public function e404()
    {                 
        return view('client404.payment');
       
    }
}
