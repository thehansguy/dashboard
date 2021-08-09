        
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
                        <li class="menu-item menu-item-submenu menu-item-rel"  data-menu-toggle="click" aria-haspopup="true">
                            <a href="{{ route('client_reports') }}" class="menu-link">
                                <span class="menu-text">Reports</span>
                                <span class="menu-desc"></span>
                                {{-- <i class="menu-arrow"></i> --}}
                            </a>
                        
                        </li>
                        <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
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
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Dashboard</h5>
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
										<li class="breadcrumb-item">
											<a href="{{ route('admin_reports.index') }}" class="text-muted">Reports</a>
										</li>
										<li class="breadcrumb-item" style= "color: blue">
											receipt
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
                            <!--begin::Tiles Widget 24-->
                            <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b" style="height: 100px; background-image:">
                                <!--begin::Body-->
                                <div class="card-body">
                                    <a href='#' class="text-dark-75 text-hover-primary font-weight-bolder font-size-h3">Payment Status:</a>
                                    <span class="ml-2 text-green-400 font-weight-bold font-size-h2 pt-2" style={{ $payment_data->payment_status == 'Paid' ?  'color:green' :'color:red  '}}>{{ $payment_data->payment_status }}</span>
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 24-->
                        </div>

                        <div class="col-xl-6">
                            <!--begin::Tiles Widget 24-->
                            <div class="card card-custom bg-radial-gradient-danger gutter-b" style="height: 150px; background-image:">
                                <!--begin::Body-->
                                <div class="card-body text-white">
                                    <a href='{{ asset($invoices_data->invoice_download_file_path.$invoices_data->invoice_download_file)}}' download class="text-white text-hover-primary font-weight-bolder font-size-h3" download="#">Download Latest Invoice</a>
                                    {{-- <div class=" font-weight-bold font-size-lg pt-2">Download your latest Invoice</div> --}}
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 24-->
                        </div>
                        <div class="col-xl-6">
                            <!--begin::Tiles Widget 24-->
                            <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" style="height: 150px; background-image:">
                                <!--begin::Body-->
                                <div class="card-body">
                                    <a href='{{ asset($receipts_data->receipt_download_file_path.$receipts_data->receipt_download_file)}}' download class="text-white text-hover-primary font-weight-bolder font-size-h3" download="#">Download Latest Receipt</a>
                                    {{-- <div class="text-white font-weight-bold font-size-lg pt-2">Download your latest Receipt</div> --}}
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 24-->
                        </div>   
                    </div>
                    <!--end::Row-->

                    {{-- invoice_data Section --}}
                    <!--begin::Row-->
                    
                    <!--end::Row-->


                    
                     {{-- Receipts Section --}}
                    <!--begin::Row-->
               
                <!--end::Row-->





      
                    <!--end::Dashboard-->
                </div>
                <!--end::Content-->
            </div>
            <!--begin::Content Wrapper-->
        </div>
        <!--end::Container-->
@endsection