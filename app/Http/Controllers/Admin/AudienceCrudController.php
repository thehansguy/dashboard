<?php

namespace App\Http\Controllers\Admin;


use App\Models\Audience;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class AudienceCrudController extends Controller
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
        $audience_data = Audience::orderBy('id','DESC')->paginate(5);
        return view('admin.view.audiences',[
            
            'users_data' => $users_data,
            'audience_data' => $audience_data
            
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
        return view('admin.entry.audience',compact('users_data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {       
      
        // validation
        $this->validate($request,[          
           
            'user_id'=>'required:255',

            'accounts_reached'=>'required',
            'total_followers'=>'required',
            'content_interaction'=>'required',
            'likes'=>'required',

            'facebook_page_likes'=>'required',
            'instagram_followers'=>'required',
            'instagram_reach'=>'required',
            'impressions'=>'required',

            'new_audience'=>'required',

            'total_audience'=>'required',
            
                        
            'top_locations_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            'age_range_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            'gender_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            'pie_chart_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            'histogram_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'



            
        ]);

        //store data

            $top_locations_image_name = time().'_'.$request->file('top_locations_image')->getClientOriginalName();
            $age_range_image_name = time().'_'.$request->file('age_range_image')->getClientOriginalName();
            $gender_image_name = time().'_'.$request->file('gender_image')->getClientOriginalName();
            $pie_chart_image_name = time().'_'.$request->file('pie_chart_image')->getClientOriginalName();
            $histogram_image_name = time().'_'.$request->file('histogram_image')->getClientOriginalName();
  
            $top_locations_image_path = 'files/images/audience/top_locations/';
            $age_range_image_path = 'files/images/audience/age_range/';
            $gender_image_path = 'files/images/audience/gender/';
            $pie_chart_image_path = 'files/images/audience/pie_chart/';
            $histogram_image_path = 'files/images/audience/histogram/';

            $request->top_locations_image->move(public_path('files/images/audience/top_locations'),$top_locations_image_name);
            $request->age_range_image->move(public_path('files/images/audience/age_range'),$age_range_image_name);
            $request->gender_image->move(public_path('files/images/audience/gender'),$gender_image_name);
            $request->pie_chart_image->move(public_path('files/images/audience/pie_chart'),$pie_chart_image_name);
            $request->histogram_image->move(public_path('files/images/audience/histogram'),$histogram_image_name);
             
            Audience::create([
                                
                'user_id'=> $request->user_id,

                'accounts_reached'=> $request->accounts_reached,
                'total_followers'=> $request->total_followers,
                'content_interaction'=> $request->content_interaction,
                'likes'=> $request->likes,

                'facebook_page_likes'=> $request->facebook_page_likes,
                'instagram_followers'=> $request->instagram_followers,
                'instagram_reach'=> $request->instagram_reach,
                'impressions'=> $request->impressions,

                'new_audience'=> $request->new_audience,

                'total_audience'=> $request->total_audience,

                
                
 
                'top_locations_image'=> $top_locations_image_name,
                'top_locations_image_path'=> $top_locations_image_path,
 

                'age_range_image'=> $age_range_image_name,
                'age_range_image_path'=> $age_range_image_path,

                'gender_image'=> $gender_image_name,
                'gender_image_path'=> $gender_image_path,

                'pie_chart_image'=> $pie_chart_image_name,
                'pie_chart_image_path'=> $pie_chart_image_path,

                'histogram_image'=> $histogram_image_name,
                'histogram_image_path'=> $histogram_image_path
                
            ]);            
    //    dd($request);
        //redirect
            return redirect()->route('admin_audiences.index')->with('status', 'File Has been uploaded successfully in laravel 8');
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
        $audience_data = Audience::where('id',$id)->first();
        return view('admin.update.audience',compact('audience_data','users_data'));
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
           
            'user_id'=>'required:255',

            'accounts_reached'=>'required',
            'total_followers'=>'required',
            'content_interaction'=>'required',
            'likes'=>'required',

            'facebook_page_likes'=>'required',
            'instagram_followers'=>'required',
            'instagram_reach'=>'required',
            'impressions'=>'required',

            'new_audience'=>'required',

            'total_audience'=>'required'          
 
        ]); 

        Audience::whereId($id)->update($validatedData);

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

        Audience::where('id', $id)->delete();

        return back()->with('success', 'Audience Data is successfully deleted');
    }
}
