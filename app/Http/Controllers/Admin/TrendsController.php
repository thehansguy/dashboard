<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Trends;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrendsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $users_data = auth()->user();
        $trend_data = Trends::paginate(5);
        return view('admin.view.trends',[
            'users_data' => $users_data,
            'trend_data' => $trend_data
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
        return view('admin.entry.trend',compact('users_data'));
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
        
            'monday'=>'required',
            'tuesday'=>'required',
            'thursday'=>'required',
            'friday'=>'required',
            'saturday'=>'required'
         
            
        ]);
        //store data
            Trends::create([
                     
                'user_id' => $request->user_id,
                
                'monday'=>$request->monday,
                'tuesday'=>$request->tuesday,
                'thursday'=>$request->thursday,
                'friday'=>$request->friday,
                'saturday'=>$request->saturday
                
            ]);
       
        //redirect
            return redirect()->route('admin_trends.index');
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
        $trend_data = Trends::where('id',$id)->first();
        return view('admin.update.trend',compact('trend_data','users_data'));
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
        
            'monday'=>'required',
            'tuesday'=>'required',
            'thursday'=>'required',
            'friday'=>'required',
            'saturday'=>'required'
            
            // 'blog_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'        
 
        ]); 

        Trends::whereId($id)->update($validatedData);

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
        Trends::where('id', $id)->delete();

        return back()->with('success', 'Trends Data is successfully deleted');
    }
}
