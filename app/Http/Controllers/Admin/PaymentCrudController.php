<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Payment;
use App\Models\Invoices;
use App\Models\Receipts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentCrudController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_data = auth()->user();    
        $payments_data = Payment::paginate(20);
        $invoices_data = Invoices::paginate(20);
        $receipts_data = Receipts::paginate(20);
        return view('admin.view.payments',[
            'users_data' => $users_data,    
            'payments_data' => $payments_data,
            'invoices_data' => $invoices_data,
            'receipts_data' => $receipts_data
        ]);     
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users_data = auth()->user();
        return view('admin.entry.payment',compact('users_data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validation
        $this->validate($request,[ 
            'user_id'=>'required',
            'payment_status'=>'required',
            
        ]);
        //store data
            Payment::create([
                     
                'user_id' => $request->user_id,
                'payment_status'=> $request->payment_status,
               
            ]);
       
        //redirect
            return redirect()->route('admin_payments.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $users_data = auth()->user();
        $payment_data = Payment::where('id',$id)->first();
        return view('admin.update.payment',compact('payment_data','users_data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // validation
        $validatedData=$request->validate([          
           
            'user_id'=>'required',
            'payment_status'=>'required',
            
            // 'blog_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'        
 
        ]); 

        Payment::whereId($id)->update($validatedData);

    //redirect
        return redirect()->back()->with('status', 'Audience data updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Payment::where('id', $id)->delete();

        return back()->with('success', 'Payment Data is successfully deleted');
    }
}
