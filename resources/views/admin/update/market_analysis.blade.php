        
@extends('layouts.admin_dashboard')

@section('content')

        <!--begin::Header Menu Wrapper-->
        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            <div class="container">
                <!--begin::Header Menu-->
                <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
                    <!--begin::Header Nav-->
                    <ul class="menu-nav">
                        <li class= "menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin.index') }}" class="menu-link">
                                <span class="menu-text">Admin Dashboard</span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                          
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_audiences.index') }}"  class="menu-link">
                                <span class="menu-text">Audience data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_market_analysis.index') }}" class="menu-link">
                                <span class="menu-text">Market Analysis data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_reports.index') }}" class="menu-link">
                                <span class="menu-text">Reports data</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                        
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('admin_payments.index') }}" class="menu-link">
                                <span class="menu-text">Payment data</span>
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
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Market Analysis</h5>
                                <!--end::Page Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                    <li class="breadcrumb-item">
                                        <a href="#" class="text-muted">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="" class="text-muted">Audience</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="" class="text-muted">Market Analysis</a>
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
                                                                <span class="card-label font-weight-bolder text-dark">Edit Market Analysis Data</span>
                                                                <span class="text-muted mt-3 font-weight-bold font-size-sm">Enter the new market analysis details below</span>
                                                            </h3>
                                                        
                                                        </div>
                                                        <!--end::Header-->
                                                        <!--begin::Body-->                                   
                                                        <form action="{{ route('admin_market_analysis.update',$market_analysis_data->id) }}" method="post" class="w-100 max-w-xs" enctype="multipart/form-data">
                                                            @csrf
                                                            @method('PUT')
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="user_id" class="not-sr-only">user_id</label>
                                                                <input type="text" name="user_id" id="user_id" placeholder="user_id"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('user_id')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->user_id}}">
                                                                
                                                                @error('user_id')
                                                                    <div class="text-red-500 mt-2 text-sm">
                                                                        {{$message}}
                                                                    </div>
                                                                @enderror
                                                            </div><br><br>





                                                            
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="accounts_reached" class="not-sr-only">accounts_reached</label>
                                                                <input type="text" name="accounts_reached" id="accounts_reached" placeholder="accounts_reached"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('accounts_reached')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->accounts_reached}}">
                                                                
                                                                @error('accounts_reached')
                                                                    <div class="text-red-500 mt-2 text-sm">
                                                                        {{$message}}
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="interaction" class="not-sr-only">interaction</label>
                                                                <input type="text" name="interaction" id="" placeholder="interaction"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('interaction')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->interaction}}">
                                                        
                                                                @error('')
                                                                <div class="text-red-500 mt-2 text-sm">
                                                                    {{$message}}
                                                                </div>
                                                            @enderror
                                                            </div>
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="total_followers" class="not-sr-only">total_followers</label>
                                                                <input type="text" name="total_followers" id="total_followers" placeholder="total_followers"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('total_followers')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->total_followers}}">
                                                        
                                                                @error('total_followers')
                                                                <div class="text-red-500 mt-2 text-sm">
                                                                    {{$message}}
                                                                </div>
                                                            @enderror
                                                            </div>
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="likes" class="not-sr-only">likes</label>
                                                                <input type="text" name="likes" id="likes" placeholder="likes"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('likes')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->likes}}">
                                                                
                                                                @error('likes')
                                                                    <div class="text-red-500 mt-2 text-sm">
                                                                        {{$message}}
                                                                    </div>
                                                                @enderror
                                                            </div><br><br>





                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="competitor_accounts_reached" class="not-sr-only">competitor_accounts_reached</label>
                                                                <input type="text" name="competitor_accounts_reached" id="competitor_accounts_reached" placeholder="competitor_accounts_reached"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('competitor_accounts_reached')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->competitor_accounts_reached}}">
                                                        
                                                                @error('competitor_accounts_reached')
                                                                <div class="text-red-500 mt-2 text-sm">
                                                                    {{$message}}
                                                                </div>
                                                            @enderror
                                                            </div>
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="competitor_interaction" class="not-sr-only">competitor_interaction</label>
                                                                <input type="text" name="competitor_interaction" id="competitor_interaction" placeholder="competitor_interaction"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('competitor_interaction')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->competitor_interaction}}">
                                                        
                                                                @error('competitor_interaction')
                                                                <div class="text-red-500 mt-2 text-sm">
                                                                    {{$message}}
                                                                </div>
                                                            @enderror
                                                            </div>

                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="competitor_total_followers" class="not-sr-only">competitor_total_followers</label>
                                                                <input type="text" name="competitor_total_followers" id="competitor_total_followers" placeholder="competitor_total_followers"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('competitor_total_followers')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->competitor_total_followers}}">
                                                                
                                                                @error('competitor_total_followers')
                                                                    <div class="text-red-500 mt-2 text-sm">
                                                                        {{$message}}
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        
                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <label for="competiter_likes" class="not-sr-only">competiter_likes</label>
                                                                <input type="text" name="competiter_likes" id="competiter_likes" placeholder="competiter_likes"
                                                                class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('competiter_likes')
                                                                    border-red-500
                                                                @enderror" value="{{ $market_analysis_data->competiter_likes}}">
                                                        
                                                                @error('competiter_likes')
                                                                <div class="text-red-500 mt-2 text-sm">
                                                                    {{$message}}
                                                                </div>
                                                            @enderror
                                                            </div><br><br>




                                                            <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">
                                                                <div>Market Size Chart</div>
                                                                <input type="file" name="market_size_chart_image" placeholder="Histogram file" id="market_size_chart_image">
                                                                    @error('market_size_chart_image')
                                                                    <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                                                    @enderror
                                                            </div>

                                                        
                                                            
                                                            <br><br>

                                                            
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
                                                                </span>Submit</button>
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