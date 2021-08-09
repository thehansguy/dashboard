<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
     public function __construct()
    {
        $this->middleware(['guest']);
    }
    
    public function index()
    {
        return view('auth.register');
    }

    public function process_registration(Request $request)   
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
   
         //sign in the user
            
         Auth::attempt($request->only('email', 'password'));

         //redirect
             return redirect()->route('client_dashboard');
    }
}
