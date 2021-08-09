<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Website_Overview;
use App\Http\Controllers\Controller;

class WebsiteOverviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_data = auth()->user();  
        $website_overview_data = Website_Overview::paginate(5);
        return view('admin.view.website_overviews',[
            'users_data' => $users_data,
            'website_overview_data' => $website_overview_data
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
        return view('admin.entry.website_overview',compact('users_data'));
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
            'website_overview_image'=>'required',
            
        ]);
        //store data

        $website_overview_image_name = time().'_'.$request->file('website_overview_image')->getClientOriginalName();
        $website_overview_image_path = 'files/images/website_overview/';
        $request->website_overview_image->move(public_path('files/images/website_overview/'),$website_overview_image_name);

            Website_Overview::create([
                     
                'user_id' => $request->user_id,
                'website_overview_image'=> $website_overview_image_name,
                'website_overview_image_path'=> $website_overview_image_path,
               
            ]);
       
        //redirect
            return redirect()->route('admin_website_overviews.index');
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
        $website_overview_data = Website_overview::where('id',$id)->first();
        return view('admin.update.website_overview',compact('website_overview_data','users_data'));
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

        Website_Overview::whereId($id)->update($validatedData);

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
        Website_Overview::where('id', $id)->delete();

        return back()->with('success', 'Website Overivew Data is successfully deleted');
    }
}
