<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Reports;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReportsCrudController extends Controller
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
        $report_data = Reports::paginate(5);  
        // dd($report_data);
        return view('admin.view.reports',[
            'users_data' => $users_data,
            'report_data' => $report_data            

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
        return view('admin.entry.report',compact('users_data'));
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

            'market_report_download_file'=>'required',

            'month'=>'required',
            'monthly_report_download_file'=>'required',
            
            'post_boosting_insights_chart_image'=>'required',

            'ideal_customer_image'=>'required'
            
            
        ]);

        //store data
        $market_report_download_file_name = time().'_'.$request->file('market_report_download_file')->getClientOriginalName();
        $market_report_download_file_path = 'files/downloads/reports/market_reports/';
        $request->market_report_download_file->move(public_path('files/downloads/reports/market_reports/'),$market_report_download_file_name);

        $monthly_report_download_file_name = time().'_'.$request->file('monthly_report_download_file')->getClientOriginalName();
        $monthly_report_download_file_path = 'files/downloads/reports/monthly_reoprts/';
        $request->monthly_report_download_file->move(public_path('files/downloads/reports/monthly_reoprts/'),$monthly_report_download_file_name);


        $post_boosting_insights_chart_image_name = time().'_'.$request->file('post_boosting_insights_chart_image')->getClientOriginalName();
        $post_boosting_insights_chart_image_path = 'files/images/reports/post_boosting_insights_chart/';
        $request->post_boosting_insights_chart_image->move(public_path('files/images/reports/post_boosting_insights_chart/'),$post_boosting_insights_chart_image_name);


        $ideal_customer_image_name = time().'_'.$request->file('ideal_customer_image')->getClientOriginalName();
        $ideal_customer_image_path = 'files/images/reports/ideal_customer/';
        $request->ideal_customer_image->move(public_path('files/images/reports/ideal_customer/'),$ideal_customer_image_name);


            Reports::create([

                
                'user_id'=> $request->user_id, 
                
                'market_report_download_file'=> $market_report_download_file_name,
                'market_report_download_file_path'=> $market_report_download_file_path,
                
                'month'=> $request->month,
                'monthly_report_download_file'=> $monthly_report_download_file_name,
                'monthly_report_download_file_path'=> $monthly_report_download_file_path,
               
                'post_boosting_insights_chart_image'=> $post_boosting_insights_chart_image_name,
                'post_boosting_insights_chart_image_path'=> $post_boosting_insights_chart_image_path,
                
                'ideal_customer_image'=> $ideal_customer_image_name,
                'ideal_customer_image_path'=> $ideal_customer_image_path           
             


                
             
            ]);
       
        //redirect
            return redirect()->route('admin_reports.index');

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
        $report_data = Reports::where('id',$id)->first();
        return view('admin.update.report',compact('report_data','users_data'));
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

            'market_report_download_file'=>'required',

            'month'=>'required',
            'monthly_report_download_file'=>'required',
            
            'post_boosting_insights_chart_image'=>'required',

            'ideal_customer_image'=>'required'
             
        ]); 

        Reports::whereId($id)->update($validatedData);

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
        Reports::where('id', $id)->delete();

        return back()->with('success', 'Reports Data is successfully deleted');
    }
}
