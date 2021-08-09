        
@extends('layouts.client_dashboard')

@section('content')

        <!--begin::Header Menu Wrapper-->
        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            <div class="container">
                <!--begin::Header Menu-->
                <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
                    <!--begin::Header Nav-->
                    <ul class="menu-nav">
                        <li class= "menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_dashboard') }}" class="menu-link">
                                <span class="menu-text">Dashboard</span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                          
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_audience') }}"  class="menu-link">
                                <span class="menu-text">Audience</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_market_analysis') }}" class="menu-link">
                                <span class="menu-text">Market Analysis</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                           
                        </li>
                        <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_reports') }}" class="menu-link">
                                <span class="menu-text">Reports</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                        
                        </li>
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_payment') }}" class="menu-link">
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
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Reports</h5>
                                <!--end::Page Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                    <li class="breadcrumb-item">
                                        <a href="{{ route('admin.index') }}" class="text-muted">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="{{ route('admin_audiences.index') }}" class="text-muted">Audience</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="{{ route('admin_market_analysis.index') }}" class="text-muted">Market Analysis</a>
                                    </li>
                                    <li class="breadcrumb-item" style= "color: blue">
                                        Reports
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
                      
                        <div class="col-xl-12">
                            <div class="row">
                         
                                <div class="col-xl-6">
                                    <!--begin::Tiles Widget 25-->
                                    <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" style="height: 250px; ">
                                        <div class="card-body d-flex">
                                            <div class="d-flex py-5 flex-column align-items-start flex-grow-1">
                                                <div class="flex-grow-1">
                                                    <a href="#" class="text-white font-weight-bolder font-size-h3">Market Report</a>
                                                    {{-- <p class="text-white opacity-75 font-weight-bold mt-3">An overview of the current months report</p> --}}
                                                </div>
                                                <a href='{{ asset($report_data->market_report_download_file_path.$report_data->market_report_download_file)}}' download class="btn btn-link btn-link-white font-weight-bold">Download Report     
                                                <span class="svg-icon svg-icon-lg svg-icon-white">
                                                    <!--begin::Svg Icon | path:./assets/media/svg/icons/Navigation/Arrow-right.svg-->
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1" />
                                                            <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                                        </g>
                                                    </svg>
                                                    <!--end::Svg Icon-->
                                                </span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Tiles Widget 25-->
                                </div>
                                <div class="col-xl-6">
                                    <!--begin::Tiles Widget 25-->
                                    <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" style="height: 250px;">
                                        <div class="card-body d-flex">
                                            <div class="d-flex py-5 flex-column align-items-start flex-grow-1">
                                                <div class="flex-grow-1">
                                                    <a href="#" class="text-white font-weight-bolder font-size-h3">Monthly Report</a>
                                                    {{-- <p class="text-white opacity-75 font-weight-bold mt-3">An overview of the current months report</p> --}}
                                                </div>
                                                <a href='{{ asset($report_data->monthly_report_download_file_path.$report_data->monthly_report_download_file)}}' download class="btn btn-link btn-link-white font-weight-bold">Download Report 
                                                <span class="svg-icon svg-icon-lg svg-icon-white">
                                                    <!--begin::Svg Icon | path:./assets/media/svg/icons/Navigation/Arrow-right.svg-->
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1" />
                                                            <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                                        </g>
                                                    </svg>
                                                    <!--end::Svg Icon-->
                                                </span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Tiles Widget 25-->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <!--begin::Tiles Widget 23-->
                                    <div class="card card-custom gutter-b" style="height: auto">
                                        <!--begin::Body-->
                                        <div class="card-body d-flex flex-column p-0">
                                            <!--begin::Stats-->
                                            <div class="flex-grow-1 card-spacer pb-0">
                                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                                    <div class="mr-2">
                                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-h2">Post Boosting Insights</a>
                                                        {{-- <div class="text-muted font-size-lg font-weight-bold pt-2">Finance and accounting reports</div> --}}
                                                    </div>

                                                    {{-- <div class="font-weight-bolder font-size-h3 text-success">$24,500</div> --}}
                                                </div>
                                             
                                                
                                            </div>
                                            <!--end::Stats-->
                                            <div class="bg-auto bg-contain">
                                                <img src="{{ asset($report_data->post_boosting_insights_chart_image_path.$report_data->post_boosting_insights_chart_image)}}"  alt="{{ asset($report_data->post_boosting_insights_chart_image_path.$report_data->post_boosting_insights_chart_image)}}" width="100%">                                                    

                                            </div>
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Tiles Widget 23-->
                                </div>
                                <div class="col-xl-6">
                                    <!--begin::Tiles Widget 24-->
                                    <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b" style="height: auto; background-image:">
                                        <!--begin::Body-->
                                        <div class="card-body">
                                            <a href='{{ asset($report_data->ideal_customer_image_path.$report_data->ideal_customer_image)}}' target="_blank" class="text-dark-75 text-hover-primary font-weight-bolder font-size-h3">Ideal Customer</a>
                                          
                                        </div>
                                        <!--end::Body-->
                                        <div class="bg-auto bg-contain">
                                            <a href="{{ asset($report_data->ideal_customer_image_path.$report_data->ideal_customer_image)}}" target="_blank" rel="noopener noreferrer">
                                                <img src="{{ asset($report_data->ideal_customer_image_path.$report_data->ideal_customer_image)}}"  alt="{{ asset($report_data->ideal_customer_image_path.$report_data->ideal_customer_image)}}" width="100%">                                                    
                                            
                                            </a>

                                        </div><br><br><br><br><br><br>
                                    </div>
                                    <!--end::Tiles Widget 24-->
                                </div>
                            </div>
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