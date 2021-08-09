<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;

use App\Models\Receipts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReceiptsCrudController extends Controller
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
        $receipts_data = Receipts::paginate(5);        
        
        return view('admin.view.receipts',[
            'users_data' => $users_data,    
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
        return view('admin.entry.receipt',compact('users_data'));
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
            'receipt_download_file'=>'required'
            
        ]);
        //store data

        $receipt_download_file_name = time().'_'.$request->file('receipt_download_file')->getClientOriginalName();
        $receipt_download_file_path = 'files/downloads/payments/receipts/';
        $request->receipt_download_file->move(public_path('files/downloads/payments/receipts/'),$receipt_download_file_name);


            Receipts::create([
                     
                'user_id' => $request->user_id,
                
                'date_issued'=> '',
                'receipt_download_file'=> $receipt_download_file_name,
                'receipt_download_file_path'=> $receipt_download_file_path,
               
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
        $receipt_data = Receipts::where('id',$id)->first();
        return view('admin.update.receipt',compact('receipt_data','users_data'));
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

        Receipts::whereId($id)->update($validatedData);

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
        Receipts::where('id', $id)->delete();

        return back()->with('success', 'Receipts Data is successfully deleted');
    }
}
