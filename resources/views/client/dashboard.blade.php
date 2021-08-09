        
@extends('layouts.client_dashboard')

@section('content')

        <!--begin::Header Menu Wrapper-->
        <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            <div class="container">
                <!--begin::Header Menu-->
                <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default header-menu-root-arrow">
                    <!--begin::Header Nav-->
                    <ul class="menu-nav">
                        <li class= "menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
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
                        <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
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
                                <h5 class="text-dark font-weight-bold my-1 mr-5">Dashboard</h5>
                                <!--end::Page Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                    <li class="breadcrumb-item" style= "color: blue">
                                        Dashboard
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


                <div class="content flex-column-fluid mr-2px" id="kt_content">
                    <!--begin::Dashboard-->
                    <!--begin::Row-->
                    <div class="row">
                        <div class="col-xl-4" style="height: auto">
                            <!--begin::Mixed Widget 4-->
                            <div class="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
                                <!--begin::Header-->
                                <div class="card-header border-0 py-5">
                                    <h3 class="card-title font-weight-bolder text-white">Audience</h3>
                                   
                                </div>
                                <!--end::Header-->
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column p-0">
                                    <!--begin::Stats-->
                                    <div class="card-spacer bg-white card-rounded flex-grow-1">
                                        <!--begin::Row-->
                                        <div class="row m-0">
                                            <div class="col px-8 py-6 mr-8">
                                                <div class="font-size-sm text-muted font-weight-bold">Facebook Page Likes</div>
                                                <div class="font-size-h2 font-weight-bolder">{{ $audience_data->facebook_page_likes }}</div>
                                            </div>
                                            <div class="col px-8 py-6">
                                                <div class="font-size-sm text-muted font-weight-bold">Instagram Followers</div>
                                                <div class="font-size-h2 font-weight-bolder">{{ $audience_data->instagram_followers }}</div>
                                            </div>
                                        </div>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <div class="row m-0">
                                            <div class="col px-8 py-6 mr-8">
                                                <div class="font-size-sm text-muted font-weight-bold">Instagram Reach</div>
                                                <div class="font-size-h2 font-weight-bolder">{{ $audience_data->instagram_reach }}</div>
                                            </div>
                                            <div class="col px-8 py-6">
                                                <div class="font-size-sm text-muted font-weight-bold">Impressions</div>
                                                <div class="font-size-h2 font-weight-bolder">{{ $audience_data->impressions }}</div>
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
                                    
                                        <div class="font-weight-boldest font-size-h3 pt-2">{{ $audience_data->new_audience }}</div>
                                        <div class="text-muted font-weight-bold">New Audience</div>
                                        <div class="bg-auto bg-contain" >
                                            <img src="{{ asset('images/dashboard/linegraph.jpg')}}"  alt="{{ asset($audience_data->top_locations_image_path.$audience_data->top_locations_image)}}" width="100%">                                                    
                                            
                                        </div>
                                    </div>
                                    <!--end::Stats-->
                                    
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Tiles Widget 21-->
                        </div>

                        <div class="col-xl-4"style="height: auto; )}}">
                            <!--begin::Tiles Widget 25-->
                            <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" >
                                <div class="card-body d-flex">
                                    <div class="d-flex py-5 flex-column align-items-start flex-grow-1">
                                        <div class="flex-grow-1">
                                            <a href="{{route('client_reports')}}" class="text-white font-weight-bolder font-size-h3">Monthly Report</a>
                                            <p class="text-white opacity-75 font-weight-bold mt-3">An overview of the current months report</p>
                                        </div>
                                        <a href='#' class="btn btn-link btn-link-white font-weight-bold">Check it out 
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
                               
                                    <!--end::Tiles Widget 25-->
                                <div class="col-xl-12 card card-custom bgi-no-repeat bgi-size-cover gutter-b bg-primary" style="height: auto; )}}">
                                    <!--begin::Tiles Widget 24-->
                                    <div class="card card-custom bgi-no-repeat bgi-size-cover gutter-b" style="height: auto; background-image: ">
                                        <!--begin::Body-->
                                        <div class="card-body">
                                            <a href='{{ route('client_payment') }}' class="text-dark-75 text-hover-primary font-weight-bolder font-size-h3">Payments</a>
                                            
                                            <div class="text-dark-50 font-weight-bold font-size-lg pt-2">Download your latest Invoice/Receipt</div>
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Tiles Widget 24-->
                                </div>
                            </div>
                            
                        </div>
                                
                        <div class="col-xl-12">
                            <div class="row">
             
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
                                                        <a href="https://simpliexpand.com/services/" target="_blank" class="text-dark-75 text-hover-primary font-weight-bolder font-size-h2">Website Overview</a>
                                                        {{-- <div class="text-muted font-size-lg font-weight-bold pt-2">Finance and accounting reports</div> --}}
                                                        
                                                    </div>
                                                
                                                    {{-- <div class="font-weight-bolder font-size-h3 text-success">$24,500</div> --}}
                                                </div>
                                                <div class="bg-auto bg-contain" >
                                                    <a href="https://simpliexpand.com/services/" target="_blank">
                                                        <img src="{{ asset($website_overview_data->website_overview_image_path.$website_overview_data->website_overview_image)}}"  alt="{{ asset($audience_data->top_locations_image_path.$audience_data->top_locations_image)}}" width="100%">                                                    
                                                    
                                                    </a>
                                                
                                                </div>
                                            </div>
                                            <!--end::Stats-->
                                           
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::Tiles Widget 23-->
                                </div>
                                <div class="col-xl-6">
                                    <!--begin::List Widget 7-->
                                    <div class="card card-custom gutter-b card-stretch">
                                        <!--begin::Header-->
                                        <div class="card-header border-0">
                                            <h3 class="card-title font-weight-bolder text-dark">Trends - Hashtags and Trending topics</h3>
                                          
                                        </div>
                                        <!--end::Header-->
                                        <!--begin::Body-->
                                        <div class="card-body pt-0">
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center flex-wrap mb-8">
                                               
                                                <!--begin::Text-->
                                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Mondays</a>
                                                    <span class="text-muted font-weight-bold">{{ $trends_data->monday }}</span>
                                                </div>
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center flex-wrap mb-8">
                                               
                                                <!--begin::Text-->
                                                <div class="d-flex flex-column flex-grow-1 mr-2 my-2">
                                                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Tuesday</a>
                                                    <span class="text-muted font-weight-bold">{{ $trends_data->tuesday }}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center flex-wrap mb-8">
                                               
                                                <!--begin::Text-->
                                                <div class="d-flex flex-column flex-grow-1 mr-2 my-2">
                                                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Thursday</a>
                                                    <span class="text-muted font-weight-bold">{{ $trends_data->thursday }}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                               <!--begin::Item-->
                                               <div class="d-flex align-items-center flex-wrap mb-8">
                                               
                                                <!--begin::Text-->
                                                <div class="d-flex flex-column flex-grow-1 mr-2 my-2">
                                                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Friday</a>
                                                    <span class="text-muted font-weight-bold">{{ $trends_data->friday }}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            <!--begin::Item-->
                                            <div class="d-flex align-items-center flex-wrap">
                                              
                                                <!--begin::Text-->
                                                <div class="d-flex flex-column flex-grow-1 mr-2 my-2">
                                                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Saturday</a>
                                                    <span class="text-muted font-weight-bold">{{ $trends_data->saturday }}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                            <!--end::Item-->
                                            
                                        </div>
                                        <!--end::Body-->
                                    </div>
                                    <!--end::List Widget 7-->
                                </div>
                              
                            </div>
                        </div>




                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 10-->
                            <div class="card card-custom card-stretch gutter-b">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-5">
                                      
                                        <!--begin::Link-->
                                        <a href="{{ asset($audience_data->age_range_image_path.$audience_data->age_range_image)}}" target="_blank" class="text-dark font-weight-bolder text-hover-primary font-size-h4">
                                            Age Range
                                        </a>
                                    <!--begin::Team-->
                                    <div class="bg-auto bg-contain">
                                        <a href="{{ asset($audience_data->age_range_image_path.$audience_data->age_range_image)}}"  target="_blank" rel="noopener noreferrer">
                                            <img src="{{ asset($audience_data->age_range_image_path.$audience_data->age_range_image)}}"  alt="{{ asset($audience_data->top_locations_image_path.$audience_data->top_locations_image)}}" width="100%">                                                    
                                        
                                        </a>
                                        
                                    </div>
                                    <!--end::Team-->
                                   
                                    </div>
                                    
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 10-->
                        </div>
                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 11-->
                            <div class="card card-custom card-stretch gutter-b">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-5">
                                    
                                        <a href="{{ asset($our_latest_package_data->our_latest_package_image_path.$our_latest_package_data->our_latest_package_image)}}"  target="_blank" class="text-dark font-weight-bolder text-hover-primary font-size-h4">Our Latest Package
                                        <!--begin::Team-->
                                        <div class="d-flex align-items-center">
                                            <a href="{{ asset($our_latest_package_data->our_latest_package_image_path.$our_latest_package_data->our_latest_package_image)}}" target="_blank">
                                                <img src="{{ asset($our_latest_package_data->our_latest_package_image_path.$our_latest_package_data->our_latest_package_image)}}"  alt="{{ asset($audience_data->top_locations_image_path.$audience_data->top_locations_image)}}" width="100%">                                                    
                                            </a>
                                            
                                        </div>
                                        <!--end::Team-->
                                    </div>
                                  
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Mixed Widget 11-->
                        </div>
                        <div class="col-xl-4">
                            <!--begin::Mixed Widget 12-->
                            <div class="card card-custom card-stretch gutter-b">
                                <!--begin::Body-->
                                <div class="card-body d-flex flex-column">
                                    <div class="flex-grow-1 pb-2">
                                     
<<<<<<< HEAD
                                        <a href="https://simpliexpand.com/11th-space-the-face-behind-the-brand/" target="_blank" class="text-dark font-weight-bolder text-hover-primary font-size-h4">Latest Simpliexpand Website Blog 
                                        <div class="mt-5 d-flex align-items-center">
                                            <a href="https://simpliexpand.com/11th-space-the-face-behind-the-brand/" target="_blank">
=======
                                        <a href="https://simpliexpand.com/blog/" target="_blank" class="text-dark font-weight-bolder text-hover-primary font-size-h4">Latest Simpliexpand Website Blog 
                                        <div class="mt-5 d-flex align-items-center">
                                            <a href="https://simpliexpand.com/blog/" target="_blank">
>>>>>>> finesse_ui
                                                <img src="{{ asset($blogs_data->blog_image_path.$blogs_data->blog_image)}}"  alt="{{ asset($audience_data->top_locations_image_path.$audience_data->top_locations_image)}}" width="100%">                                                    
                                            </a>
                                            
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