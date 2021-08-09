<?php

namespace App\Http\Controllers\Client;

use App\Models\Payment;

use App\Models\Invoices;
use App\Models\Receipts;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {  
        $uid = auth()->user()->id;    
             $users_data = auth()->user();

            if( Payment::where('user_id',$uid)->latest()->first() &&
                Invoices::where('user_id',$uid)->latest()->first() &&
                Receipts::where('user_id',$uid)->latest()->first()

            ){

                $payment_data = Payment::where('user_id',$uid)->latest()->first();
                $invoices_data = Invoices::where('user_id',$uid)->latest()->first();;
                $receipts_data = Receipts::where('user_id',$uid)->latest()->first();;

                return view('client.payment',[
                    'users_data' => $users_data,
                'payment_data' => $payment_data,
                'invoices_data' => $invoices_data,
                'receipts_data' => $receipts_data 
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
