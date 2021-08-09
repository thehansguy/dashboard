<!DOCTYPE html>
<html lang="en" class="">
<!-- BEGIN: Head -->
<head>
    <meta charset="utf-8">
    <link href={{asset("images/logo.ico")}} rel="shortcut icon">
    <meta name="csrf-token" content="UlU3jLd9DYevVjcafthz9y2Chpm8ObUVsiCBlnYq">
    <meta name="viewport" content="width=device-width, initial-scale=1">


        <title>Client Login | Simpliexpand</title>

    <!-- css links-->
    <link rel="stylesheet" href={{asset("css/auth1.css")}} />
  
</head>
<!-- END: Head -->

    <body class="login">
            <div class="container sm:px-10">
        <div class="block xl:grid grid-cols-2 gap-4">
            <!-- BEGIN: Login Info -->
            <div class="hidden xl:flex flex-col min-h-screen">
                <a href="https://simpliexpand.com/" class="-intro-x flex items-center pt-5">
                    <img alt="Simpliexpand Logo" width="30%" src="{{asset("images/logo.png")}}" >
                    
                </a>
                <div class="my-auto">
                    <img alt="Simpliexpand Logo" class="-intro-x w-1/2 -mt-16" src="{{asset("images/illustration.png")}}">
                    <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">A few more clicks to <br> sign in to your account.</div>
                    <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">Manage all your Simpliexpand accounts in one place</div>
                </div>
            </div>
            <!-- END: Login Info -->
            <!-- BEGIN: Login Form -->
            <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    {{-- <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Sign In</h2> --}}
                    <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your Simpliexpand accounts in one place</div>
                     
                    <div class="intro-x mt-8">
                      @yield('content')  
                       

                    </div>
                   
                      
                    </div>
                   
                    
                </div>
            </div>
            <!-- END: Login Form -->
        </div>
    </div>    

        <!-- BEGIN: JS Assets-->
       
        <!-- END: JS Assets-->

            <script>
      
    </script>
    </body>

</html>