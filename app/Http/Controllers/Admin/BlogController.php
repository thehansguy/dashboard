<?php

namespace App\Http\Controllers\Admin;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
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
        $blogs = Blog::orderBy('id','DESC')->paginate(5);        
        return view('admin.view.blogs',[
            'users_data' => $users_data,    
            'blogs' => $blogs
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
        return view('admin.entry.blog',compact('users_data'));
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
            
            'blog_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            
        ]);
        //store data

        $blog_image_name = time().'_'.$request->file('blog_image')->getClientOriginalName();
        $blog_image_path = 'files/images/blog/';
        $request->blog_image->move(public_path('files/images/blog/'),$blog_image_name);

            Blog::create([
                     
                'user_id' => $request->user_id,
                
                'blog_image'=> $blog_image_name,
                'blog_image_path'=> $blog_image_path
               
            ]);
       
        //redirect
            return redirect()->route('admin_blogs.index');
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
        $blog_data = Blog::where('id',$id)->first();
        return view('admin.update.blog',compact('blog_data','users_data'));
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

        Blog::whereId($id)->update($validatedData);

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
        Blog::where('id', $id)->delete();

        return back()->with('success', 'Blog Data is successfully deleted');
    }
}
