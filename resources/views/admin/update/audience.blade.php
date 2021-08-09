        
@extends('layouts.admin_dashboard')

@section('content')

        <!--begin::Header Menu Wrapper-->
        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            <div class="container">
                <!--begin::Header Menu-->
                <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
                    <!--begin::Header Nav-->
                    <ul class="menu-nav">
                        <li class="menu-item menu-item-submenu menu-item-rel"  data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin.index') }}" class="menu-link">
                                <span class="menu-text">Admin Dashboard</span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                          
                        </li>
                        <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_audiences.index') }}"  class="menu-link">
                                <span class="menu-text">Audience Data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_market_analysis.index') }}" class="menu-link">
                                <span class="menu-text">Market Analysis Data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_reports.index') }}" class="menu-link">
                                <span class="menu-text">Reports Data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                        
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_payments.index') }}" class="menu-link">
                                <span class="menu-text">Payment Data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                    </ul>
                    <!--end::Header Nav-->
                </div>
                <!--end::Header Menu-->
            </div>
        </div>
        <!--end::Header Menu Wrapper-->
        <!--begin::Container-->
        <div class="d-flex flex-row flex-column-fluid container">
            <!--begin::Content Wrapper-->
            <div class="main d-flex flex-column flex-row-fluid">
                <!--begin::Subheader-->
                <div class="subheader py-2 py-lg-6" id="kt_subheader">
                    <div class="w-100 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        <!--begin::Info-->
                        <div class="d-flex align-items-center flex-wrap mr-1">
                            <!--begin::Page Heading-->
                            <div class="d-flex align-items-baseline flex-wrap mr-5">
                                <!--begin::Page Title-->
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Audience</h5>
                                <!--end::Page Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                    <li class="breadcrumb-item">
                                        <a href="#" class="text-muted">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="" class="text-muted">Audience</a>
                                    </li>
                                </ul>
                                <!--end::Breadcrumb-->
                            </div>
                            <!--end::Page Heading-->
                        </div>
                        <!--end::Info-->
                        <!--begin::Toolbar-->
                        <div class="d-flex align-items-center">
                            {{-- <!--begin::Daterange-->
                            <a href="#" class="btn btn-light-primary btn-sm font-weight-bold mr-2" id="kt_dashboard_daterangepicker" data-toggle="tooltip" title="Select dashboard daterange" data-placement="left">
                                <span class="opacity-60 font-weight-bold mr-2" id="kt_dashboard_daterangepicker_title">Today</span>
                                <span class="font-weight-bold" id="kt_dashboard_daterangepicker_date">Jan 14</span>
                            </a>
                            <!--end::Daterange--> --}}
                           
                        </div>
                        <!--end::Toolbar-->
                    </div>
                </div>
                <!--end::Subheader-->


                <div class="content flex-column-fluid" id="kt_content">
                    <!--begin::Dashboard-->

                            
                          
						<!--begin::Row-->
                            <div class="row">
                                <div class="col-xl-12">
                                    <!--begin::Advance Table Widget 6-->
                                    <div class="card card-custom gutter-b card-stretch w-ful">
                                        <!--begin::Header-->
                                        <div class="card-header border-0 py-5">
                                            <h3 class="card-title align-items-start flex-column">
                                                <span class="card-label font-weight-bolder text-dark">Edit Audience Data</span>
                                                <span class="text-muted mt-3 font-weight-bold font-size-sm">Enter the new users details below</span>
                                            </h3>
                                        
                                        </div>
                                        <!--end::Header-->
                                        <!--begin::Body-->                                    
                                            <form action="{{ route('admin_audiences.update',$audience_data->id) }}" method="POST" class="w-100 max-w-xs" >
                                                @csrf
                                                @method('PUT')
                                                <input type="hidden" name="id" value="{{$audience_data->id}}">

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="user_name" class="not-sr-only">user_name</label>
                                                    <input 
                                                        type="text" 
                                                        name="user_name" 
                                                        id="user_name" 
                                                        placeholder="user_name" 
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                            @error('user_id')                                                        
                                                                border-red-500
                                                            @enderror" 
                                                        value="{{$audience_data->user->name}}">
                                                    
                                                    @error('user_id')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="user_id" class="not-sr-only">user_id</label>
                                                    <input 
                                                        type="text" 
                                                        name="user_id" 
                                                        id="user_id" 
                                                        placeholder="user_id" 
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                            @error('user_id')                                                        
                                                                border-red-500
                                                            @enderror" 
                                                        value="{{$audience_data->user_id}}">
                                                    
                                                    @error('user_id')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div><br><br>





                                                
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="accounts_reached" class="not-sr-only">accounts_reached</label>
                                                    <input 
                                                        type="text" 
                                                        name="accounts_reached" 
                                                        id="accounts_reached" 
                                                        placeholder="accounts_reached"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                            @error('accounts_reached')
                                                                border-red-500
                                                            @enderror" 
                                                        value="{{$audience_data->accounts_reached}}">
                                                    
                                                    @error('accounts_reached')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="total_followers" class="not-sr-only">total_followers</label>
                                                    <input 
                                                        type="text" 
                                                        name="total_followers" 
                                                        id="total_followers" 
                                                        placeholder="total_followers"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                            @error('total_followers')
                                                                border-red-500
                                                            @enderror" 
                                                        value="{{$audience_data->total_followers}}">
                                            
                                                    @error('total_followers')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div>
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="content_interaction" class="not-sr-only">content_interaction</label>
                                                    <input 
                                                        type="text" 
                                                        name="content_interaction" 
                                                        id="" 
                                                        placeholder="content_interaction"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('content_interaction')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->content_interaction}}">
                                            
                                                    @error('content_interaction')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div>                                           
  
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="likes" class="not-sr-only">likes</label>
                                                    <input 
                                                        type="text" 
                                                        name="likes" 
                                                        id="likes" 
                                                        placeholder="likes"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                            @error('likes')
                                                                border-red-500
                                                            @enderror" 
                                                        value="{{$audience_data->likes}}">
                                                    
                                                    @error('likes')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div><br><br>





                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="facebook_page_likes" class="not-sr-only">facebook_page_likes</label>
                                                    <input 
                                                        type="text" 
                                                        name="facebook_page_likes" 
                                                        id="facebook_page_likes" 
                                                        placeholder="facebook_page_likes"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('facebook_page_likes')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->facebook_page_likes}}">
                                            
                                                    @error('facebook_page_likes')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div>
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="instagram_followers" class="not-sr-only">instagram_followers</label>
                                                    <input 
                                                        type="text" 
                                                        name="instagram_followers" 
                                                        id="instagram_followers" 
                                                        placeholder="instagram_followers"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('instagram_followers')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->instagram_followers}}">

                                            
                                                    @error('instagram_followers')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div>

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="instagram_reach" class="not-sr-only">instagram_reach</label>
                                                    <input 
                                                        type="text" 
                                                        name="instagram_reach" 
                                                        id="instagram_reach" 
                                                        placeholder="instagram_reach"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('instagram_reach')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->instagram_reach}}">
                                                   

                                                    @error('instagram_reach')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="impressions" class="not-sr-only">impressions</label>
                                                    <input 
                                                        type="text" 
                                                        name="impressions" 
                                                        id="impressions" 
                                                        placeholder="impressions"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('impressions')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->impressions}}">

                                            
                                                    @error('impressions')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div><br><br>




                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="new_audience" class="not-sr-only">new_audience</label>
                                                    <input 
                                                        type="text" 
                                                        name="new_audience" 
                                                        id="new_audience" 
                                                        placeholder="new_audience"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('new_audience')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->new_audience}}">

                                            
                                                    @error('new_audience')
                                                    <div class="text-red-500 mt-2 text-sm">
                                                        {{$message}}
                                                    </div>
                                                @enderror
                                                </div><br><br>






                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    <label for="total_audience" class="not-sr-only">total_audience</label>
                                                    <input 
                                                        type="text" 
                                                        name="total_audience" 
                                                        id="total_audience" 
                                                        placeholder="total_audience"
                                                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg 
                                                        @error('total_audience')
                                                            border-red-500
                                                        @enderror" 
                                                        value="{{$audience_data->total_audience}}">

                                                    
                                                    @error('total_audience')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>





                                      

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    {{-- <label for="top_locations_image" class="not-sr-only">Top Locations File</label> --}}
                                                    <input 
                                                        type="hidden" 
                                                        name="top_locations_image" 
                                                        placeholder="Top Location file" 
                                                        id="top_locations_image"
                                                        value="{{$audience_data->top_locations_image}}">
                                                    
                                                    @error('top_locations_image')
                                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                                    @enderror
                                                        
                                                        
                                                </div>
                                        



                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    {{-- <div>Age Range File</div> --}}
                                                    <input 
                                                        type="hidden" 
                                                        name="age_range_image" 
                                                        placeholder="Age Range file" 
                                                        id="age_range_image"
                                                        value="{{$audience_data->age_range_image}}">
                                                        
                                                    @error('age_range_image')
                                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>                                                      
                                                    @enderror
                                                </div>



                                        
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    {{-- <div>Gender File</div> --}}
                                                    <input 
                                                        type="hidden" 
                                                        name="gender_image" 
                                                        placeholder="Gender Insights file" 
                                                        id="gender_image"
                                                        value="{{$audience_data->gender_image}}">

                                                    @error('gender_image')
                                                    <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                                    @enderror
                                                </div>
                                                



                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    {{-- <div>Pie Chart File</div> --}}
                                                    <input 
                                                        type="hidden" 
                                                        name="pie_chart_image" 
                                                        placeholder="Pie Chart file" 
                                                        id="pie_chart_image"
                                                        value="{{$audience_data->pie_chart_image}}">
                                                    

                                                    @error('pie_chart_image')
                                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                                    @enderror
                                                </div>


                      

                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                    {{-- <div>Histogram File</div> --}}
                                                    <input 
                                                        type="hidden" 
                                                        name="histogram_image" 
                                                        placeholder="Histogram file" 
                                                        id="histogram_image"
                                                        value="{{$audience_data->histogram_image}}">

                                                    @error('histogram_image')
                                                    <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                                    @enderror
                                                </div>



                                            
                                                <div class="px-8 mt-5 mb-10 card-toolbar">
                                                    <button type="submit" class="btn btn-primary font-weight-bolder font-size-sm w-100">
                                                    <span class="svg-icon svg-icon-md svg-icon-white">
                                                        <!--begin::Svg Icon | path:./assets/media/svg/icons/Communication/Add-user.svg-->
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                            </g>
                                                        </svg>
                                                        <!--end::Svg Icon-->
                                                    </span>Update</button>
                                                </div>
                                            
                                        
                                            </form>
                                        <!--end::Body-->

                                    </div>
                                    <!--end::Advance Table Widget 6-->
                                </div>
                            </div>
                        <!--end::Row-->                                                






                    <!--end::Dashboard-->
                </div>
                <!--end::Content-->
            </div>
            <!--begin::Content Wrapper-->
        </div>
        <!--end::Container-->
@endsection