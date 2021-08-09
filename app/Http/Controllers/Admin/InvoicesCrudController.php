<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Invoices;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoicesCrudController extends Controller
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
        $invoices_data = Invoices::orderBy('id','DESC')->paginate(5);       
        return view('admin.view.invoices',[
            'users_data' => $users_data,
            'invoices_data' => $invoices_data
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
        return view('admin.entry.invoice',compact('users_data'));
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
            
            // 'date_issued'=>'required',
            'invoice_download_file'=>'required'
            
        ]);
        //store data

        $invoice_download_file_name = $request->file('invoice_download_file')->getClientOriginalName();
        $invoice_download_file_path = 'files/downloads/payments/invoices/';
        $request->invoice_download_file->move(public_path('files/downloads/payments/invoices/'),$invoice_download_file_name);

            Invoices::create([
                     
                 'user_id' => $request->user_id,
                
                'date_issued'=>'date_issued',
                'invoice_download_file'=> $invoice_download_file_name,
                'invoice_download_file_path'=> $invoice_download_file_path
               
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
        $invoice_data = Invoices::where('id',$id)->first();
        return view('admin.update.invoice',compact('invoice_data','users_data'));
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
            
            // 'blog_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'        
 
        ]); 

        Invoices::whereId($id)->update($validatedData);

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
        Invoices::where('id', $id)->delete();

        return back()->with('success', 'Invoices Data is successfully deleted');
    }
}
