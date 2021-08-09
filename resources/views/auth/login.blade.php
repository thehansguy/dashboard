@extends('layouts.auth')

@section('content')      
<h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Sign In</h2><br><br><br>
<form action="{{ route('login') }}" method="post" class="form form--login">
    @csrf       

   

    @if (session('status'))
        <div class="bg-red-500 p-4 rounded-lg mb-6 text-white text-center">
            {{ session('status') }}
        </div>
   
    @endif


    <div class="mb-4">
        <label for="email" class="not-sr-only">Email</label>
        <input type="text" name="email" id="email" placeholder="Email"
        class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('email')
            border-red-500
        @enderror" value="{{ old('email')}}">

        @error('email')
        <div class="text-red-500 mt-2 text-sm">
            {{$message}}
        </div>
    @enderror
    </div>

    <div class="mb-4">
        <label for="password" class="not-sr-only">Password</label>
        <input type="password" name="password" id="password" placeholder="Password"
        class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password')
        border-red-500
    @enderror" value="">

        @error('password')
        <div class="text-red-500 mt-2 text-sm">
            {{$message}}
        </div>
    @enderror
    </div>
    
    <div class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
        <div class="flex items-center mr-auto">
            <input type="checkbox" class="input border mr-2" id="remember" name="remember">
            <label class="cursor-pointer select-none" for="remember">Remember me</label>
        </div>

        
    <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">Login</button>
    </div>
</form>   
    <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button id="btn-login" type="submit" class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">Login</button>
    </div>
@endsection