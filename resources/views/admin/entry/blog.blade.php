        
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
                            <a href="{{ route('admin_blogs.index') }}"  class="menu-link">
                                <span class="menu-text">blog Data</span>
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
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Blog</h5>
                                <!--end::Page Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                    <li class="breadcrumb-item">
                                        <a href="#" class="text-muted">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="" class="text-muted">Blog</a>
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
                                                <span class="card-label font-weight-bolder text-dark">Add New Blog Data</span>
                                                <span class="text-muted mt-3 font-weight-bold font-size-sm">Enter the new blog data below</span>
                                            </h3>
                                        
                                        </div>
                                        <!--end::Header-->
                                        <!--begin::Body-->                                    
                                            <form action="{{ route('admin_blogs.store') }}" method="post" class="w-100 max-w-xs" enctype="multipart/form-data">
                                                @csrf
                                            
                                            
                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">

                                                    <label for="user_id" class="sr-only">User ID</label>
                                                    <input type="text" name="user_id" id="user_id" placeholder="Enter Client ID"

                                                    class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('user_id')
                                                        border-red-500
                                                    @enderror" value="{{ old('user_id')}}">
                                                    
                                                    @error('user_id')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div><br><br>




                                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-2">

                                                    <label for="blog_image" class="sr-only">Blog Image</label>
                                                    <input type="text" name="blog_image" id="blog_image" placeholder="Blog Image"
                                                    class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('blog_image')
                                                        border-red-500
                                                    @enderror" value="{{ old('blog_image')}}">
                                                    
                                                    @error('blog_image')
                                                        <div class="text-red-500 mt-2 text-sm">
                                                            {{$message}}
                                                        </div>
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