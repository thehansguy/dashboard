<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class PortalUsersCrud extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_data = auth()->user();  
        $portal_users_data = User::latest();
        return view('admin.dashboard',[
            'users_data' => $users_data,
            'portal_users' => $portal_users_data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        return view('admin.entry.user');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {     
        
        //  dd($request->file('user_dp_image'));
        
       //validation
       $this->validate($request,[
        
        'user_dp_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'name'=>'required|max:255',
        'username'=>'required|max:255',
        'email'=>'required|email|max:255',
        'password'=>'required|confirmed',
        
        
    ]);

    //store data
            // dd($request->file('user_dp_image')->getClientOriginalName());

    
        $user_dp_image_name = time().'_'.$request->file('user_dp_image')->getClientOriginalName();
        // dd();

      
        $user_dp_image_path = 'files/images/users/dp/';
        // dd();

        $request->user_dp_image->move(public_path('files/images/users/dp/'),$user_dp_image_name);

        User::create([
            'name' => $request->name,
            'username' => $request ->username,
            'email' => $request ->email,
            'password' => Hash::make($request->password),
            'user_dp_image_name' => $user_dp_image_name,
            'user_dp_image_path' => $user_dp_image_path
        ]);
   
        //redirect
            return redirect()->route('admin.index');
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
