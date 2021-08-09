<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\invoices;
use Illuminate\Http\Request;

class InvoicesController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {  
        $uid = auth()->user()->id;
         $users_data = auth()->user();


            if( invoices::where('user_id',$uid)->first() ){

                $invoices_data = invoices::where('user_id',$uid)->first();
            

                return view('client.invoice',[

                  'users_data' => $users_data,  
                    
                'invoices_data' => $invoices_data 
            ]);   
        }
    else{

            return view('client404.invoice',[
                'users_data' => $users_data 
            ]);
           
        }            
        
    }


    public function e404()
    {                 
        return view('client404.invoice');
       
    }
}
