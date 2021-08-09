        
@extends('layouts.client_dashboard')

@section('content')

        <!--begin::Header Menu Wrapper-->
        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            <div class="container">
                <!--begin::Header Menu-->
                <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
                    <!--begin::Header Nav-->
                    <ul class="menu-nav">
                        <li class= "menu-item menu-item-submenu menu-item-rel"data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_dashboard') }}" class="menu-link ">
                                <span class="menu-text">Dashboard</span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                          
                        </li>
                        <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_audience') }}"  class="menu-link ">
                                <span class="menu-text">Audience</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_market_analysis') }}" class="menu-link ">
                                <span class="menu-text">Market Analysis</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_reports') }}" class="menu-link ">
                                <span class="menu-text">Reports</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                        
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_payment') }}" class="menu-link ">
                                <span class="menu-text">Payment</span>
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
                                <span class="font-weight-bold" id="kt_dashboard_daterangepicker_date">Jan 19</span>
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
                        <div class="col-xl-4" style="height: auto">
                            <!--begin::Mixed Widget 4-->
                            <div class="card card-custom bg-radial-gradient-danger gutter-b  card-stretch">
                                <!--begin::Header-->
                                <div class="card-header border-0 py-5">
                                    <h3 class="card-title font-weight-bolder text-white">General Audience</h3>
                                </div>
                                <!--end::Header-->
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column p-0">
                                    <!--begin::Stats-->
                                    <div class="card-spacer bg-white card-rounded flex-grow-1">
                                        <!--begin::Row-->
                                        <div class="row m-0">
                                            <div class="col px-8 py-6 mr-8">
                                                <div class="font-size-sm text-muted font-weight-bold">Accounts Reached</div>
                                                <div class="font-size-h2 font-weight-bolder">104</div>
                                            </div>
                                            <div class="col px-8 py-6">
                                                <div class="font-size-sm text-muted font-weight-bold">Content Interraction</div>
                                                <div class="font-size-h2 font-weight-bolder">420</div>
                                            </div>
                                        </div>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <div class="row m-0">
                                            <div class="col px-8 py-6 mr-8">
                                                <div class="font-size-sm text-muted font-weight-bold">Total Followers</div>
                                                <div class="font-size-h2 font-weight-bolder">2085</div>
                                            </div>
                                            <div class="col px-8 py-6">
                                                <div class="font-size-sm text-muted font-weight-bold">Likes</div>
                                                <div class="font-size-h2 font-weight-bolder">1400</div>
                                            </div>
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Stats-->
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 4-->
                        </div>

  
                        <div class="col-xl-4">
                            <!--begin::Tiles Widget 21-->
                            <div class="card card-custom gutter-b" style="height: auto">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column p-0">
                                    <!--begin::Stats-->
                                    <div class="flex-grow-1 card-spacer pb-0">
                                        
                                        <span class="svg-icon svg-icon-2x svg-icon-info">
                                            <!--begin::Svg Icon | path:./assets/media/svg/icons/Communication/Group.svg-->
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                    <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                            <!--end::Svg Icon-->
                                        </span>
                                    
                                        <div class="font-weight-boldest font-size-h3 pt-2">875</div>
                                        <div class="text-muted font-weight-bold">Total Audience</div>
                                        <div class="bg-auto bg-contain" >
                                            <img src="{{asset('images/dashboard/linegraph.jpg')}}" alt="image goes here" width="100%">                                                    
                                        </div>
                                    </div>
                                    <!--end::Stats-->
                                    
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 21-->
                        </div>

                        <div class="col-xl-4">
                            <!--begin::Tiles Widget 25-->
                            <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" style="height: auto; ">
                                <div class="card-body d-flex">
                                    <div class="d-flex py-5 flex-column align-items-start flex-grow-1">
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-white font-weight-bolder font-size-h3">Top Locations</a>                                            
                                            <div class="bg-auto bg-contain" >
                                                <img src="{{asset('images/dashboard/top_locations_chart.jpg')}}" alt="image goes here" width="100%">                                                    
                                            </div>
                                            <br><br>
                                        </div>
      
                                    </div>
                                </div>
                            </div>
                            <!--end::Tiles Widget 25-->
                        </div>

                        <div class="col-xl-4">
                            <!--begin::Tiles Widget 23-->
                            <div class="card card-custom gutter-b" style="height: auto">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column p-0">
                                    <!--begin::Stats-->
                                    <div class="flex-grow-1 card-spacer pb-0">
                                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                                            <div class="mr-2">
                                                <a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-h2">Age Range</a>
                                           
                                            </div>
                                      
                                            {{-- <div class="font-weight-bolder font-size-h3 text-success">$24,500</div> --}}
                                        </div>
                                    </div>
                                    <!--end::Stats-->
                                    {{-- <!--begin::Chart-->
                                    <div id="kt_tiles_widget_23_chart" class="card-rounded-bottom" data-color="success" style="height: 100px"></div>
                                    <!--end::Chart--> --}}
                                </div>
                                <div class="bg-auto bg-contain" >
                                    <img src="{{asset('images/dashboard/age_range_chart.jpg')}}" alt="image goes here" width="90%">                                                    
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 23-->
                        </div>

                        <div class="col-xl-4">
                            <!--begin::Tiles Widget 24-->
                            <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b" style="height: auto; ">
                                <!--begin::Body-->
                                <div class="card-body">
                                    <a href='#' class="text-dark-75 text-hover-primary font-weight-bolder font-size-h3">Gender</a>
                                     <div class="bg-auto bg-contain" >
                                    <img src="{{asset('images/dashboard/gender_pie_chart.jpg')}}" alt="image goes here" width="100%">                                                    
                                </div> 
                                <br><br><br><br><br>
                            </div>
                              
                                
                                <!--end::Body-->
                            </div>
                            
                            <!--end::Tiles Widget 24-->
                        </div>
                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 10-->
                            <div class="card card-custom card-stretch gutter-b">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-5">

                                        <!--begin::Link-->
                                        <div class="text-dark font-weight-bolder text-hover-primary font-size-h4">Pie Chart</div>
                                        <!--end::Link-->

                                    </div>
                                    <!--begin::Team-->
                                    <div class="bg-auto bg-contain">
                                        <img src="{{asset('images/dashboard/age_range_chart.jpg')}}" alt="image goes here" width="100%">
                                    </div>
                                    <!--end::Team-->
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 10-->
                        </div>


                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row">
                      
                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 11-->
                            <div class="card card-custom card-stretch gutter-b">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-5">               
                                        <a href="#" class="text-dark font-weight-bolder text-hover-primary font-size-h4">IG Histogram Images                                   
                                    </div>
                                    <!--begin::Team-->
                                 
                                    <!--end::Team-->
                                </div>
                                <div class="bg-auto bg-contain">
                                    <img src="{{asset('images/dashboard/age_range_chart.jpg')}}" alt="image goes here" width="100%">
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 11-->
                        </div>
                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 12-->
                            <div class="card card-custom card-stretch gutter-b pt-5">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-5">
                                     
                                        <a href="#" class="text-dark font-weight-bolder text-hover-primary font-size-h4">Latest Simpliexpand Website Blog 
                                        <div class="mt-10 d-flex align-items-center">
                                            <img src="{{asset('images/dashboard/startup_spotlight.png')}}" alt="image goes here" width="100%">                                        
                                        </div>
                                    </div>
                                    <!--begin::Team-->
                               
                                    <!--end::Team-->
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 12-->
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