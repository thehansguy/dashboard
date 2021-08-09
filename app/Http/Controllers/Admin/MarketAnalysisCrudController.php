<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Audience;
use Illuminate\Http\Request;
use App\Models\MarketAnalysis;
use App\Http\Controllers\Controller;

class MarketAnalysisCrudController extends Controller
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
        $market_analysis_data = MarketAnalysis::orderBy('id','DESC')->paginate(5);        
        return view('admin.view.market_analysis',[
            'users_data' => $users_data,
            'audience_data' => $audience_data,
            'market_analysis_data' => $market_analysis_data
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
        return view('admin.entry.market_analysis',compact('users_data'));
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
           
            'user_id'=>'required|max:255',

            'accounts_reached'=>'required|max:255',
            'interaction'=>'required|max:255',
            'total_followers'=>'required|max:255',
            'likes'=>'required|max:255',

            'competitor_accounts_reached'=>'required|max:255',
            'competitor_interaction'=>'required|max:255',
            'competitor_total_followers'=>'required|max:255',
            'competiter_likes'=>'required|max:255',

            'market_size_chart_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
           

        ]);

        //store data


            $market_size_chart_image_name = time().'_'.$request->file('market_size_chart_image')->getClientOriginalName();
            $market_size_chart_image_path = 'files/images/market_analysis/market_size_chart/';
            $request->market_size_chart_image->move(public_path('files/images/market_analysis/market_size_chart/'),$market_size_chart_image_name);
 

            MarketAnalysis::create([

                'user_id'=> $request->user_id,

                'accounts_reached'=> $request->accounts_reached,
                'interaction'=> $request->interaction,
                'total_followers'=> $request->total_followers,
                'likes'=> $request->likes,

                'competitor_accounts_reached'=> $request->competitor_accounts_reached,
                'competitor_interaction'=> $request->competitor_interaction,
                'competitor_total_followers'=> $request->competitor_total_followers,
                'competiter_likes'=> $request->competiter_likes,

                'market_size_chart_image'=> $market_size_chart_image_name,
                'market_size_chart_image_path'=> $market_size_chart_image_path
             
                
            ]);
       
        //redirect
            return redirect()->route('admin_market_analysis.index');

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
        $market_analysis_data = MarketAnalysis::where('id',$id)->first();
        return view('admin.update.market_analysis',compact('market_analysis_data','users_data'));
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
           
            'user_id'=>'required|max:255',

            'accounts_reached'=>'required|max:255',
            'interaction'=>'required|max:255',
            'total_followers'=>'required|max:255',
            'likes'=>'required|max:255',

            'competitor_accounts_reached'=>'required|max:255',
            'competitor_interaction'=>'required|max:255',
            'competitor_total_followers'=>'required|max:255',
            'competiter_likes'=>'required|max:255',
            
 
        ]); 

        MarketAnalysis::whereId($id)->update($validatedData);

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
        MarketAnalysis::where('id', $id)->delete();

        return back()->with('success', 'MarketAnalysis Data is successfully deleted');
    }
}
