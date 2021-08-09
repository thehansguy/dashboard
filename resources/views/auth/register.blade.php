@extends('layouts.auth')

@section('content')
     <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Register</h2><br><br><br>
            <form action="{{ route('register') }}" method="post" class="form form--register" enctype="multipart/form-data" class="w-100 max-w-xs">
                @csrf

              
                <div class="mb-4">
                    <div>Profile Picture</div>
                    <input type="file" name="user_dp_image" placeholder="Profile Picture" id="user_dp_image">
                        @error('user_dp_image')
                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                        @enderror
                </div>

                <div class="mb-4">
                    <label for="name" class="not-sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your name"
                    class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('name')
                        border-red-500
                    @enderror" value="{{ old('name')}}">
                    
                    @error('name')
                        <div class="text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="username" class="not-sr-only">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username"
                    class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('username')
                        border-red-500
                    @enderror" value="{{ old('username')}}">

                    @error('username')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
                </div>

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
                    <input type="password" name="password" id="password" placeholder="Choose a password"
                    class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password')
                    border-red-500
                @enderror" value="">

                    @error('password')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
                </div>
                
                <div class="mb-4">
                    <label for="password_confirmation" class="not-sr-only">Password</label>
                    <input type="password" name="password_confirmation" id="password" placeholder="Repeat your password"
                    class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password_confirmation')
                    border-red-500
                @enderror" value="">

                    @error('password_confirmation')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
                </div>

                <div>
                    <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">Register</button>
                </div>
                <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button id="btn-login" type="submit" class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">Register</button>
            </div>
            </form>
            
@endsection