<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Our_Latest_Package;
use App\Http\Controllers\Controller;

class OurLatestPackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_data = auth()->user();  
        $our_latest_package_data = Our_Latest_Package::paginate(5);
        return view('admin.view.our_latest_packages',[
            'users_data' => $users_data,
            'our_latest_package_data' => $our_latest_package_data
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
        return view('admin.entry.our_latest_package',compact('users_data'));

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
            'our_latest_package_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            
        ]);
        //store data

        $our_latest_package_image_name = time().'_'.$request->file('our_latest_package_image')->getClientOriginalName();
        $our_latest_package_image_path = 'files/images/our_latest_package/';
        $request->our_latest_package_image->move(public_path('files/images/our_latest_package/'),$our_latest_package_image_name);

            Our_Latest_Package::create([
                     
                'user_id' => $request->user_id,
                
                'our_latest_package_image'=> $our_latest_package_image_name,
                'our_latest_package_image_path'=> $our_latest_package_image_path
               
            ]);
       
        //redirect
            return redirect()->route('admin_our_latest_packages.index');
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
        $our_latest_package_data = Our_Latest_Package::where('id',$id)->first();
        return view('admin.update.our_latest_package',compact('our_latest_package_data','users_data'));
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

        Our_Latest_Package::whereId($id)->update($validatedData);

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
        Our_Latest_Package::where('id', $id)->delete();

        return back()->with('success', 'Our_Latest_Package Data is successfully deleted');
    }
}
