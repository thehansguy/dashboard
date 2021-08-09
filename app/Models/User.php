<?php

namespace App\Models;

use App\Models\Post;
use App\Models\Trends;
use App\Models\Payment;
use App\Models\Reports;
use App\Models\Audience;
use App\Models\MarketAnalysis;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = "users";

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'user_dp_image_name',
        'user_dp_image_path'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

   
    public function audiences()
    {
        return $this -> hasMany(Audience::class);
    }
    public function payment()
    {
        return $this -> hasMany(Payment::class);
    }
    public function market_analyses()
    {
        return $this -> hasMany(MarketAnalysis::class);
    }
    public function reports()
    {
        return $this -> hasMany(Reports::class);
    }


    
    public function trends()
    {
        return $this -> hasMany(Trends::class);
    }
    public function website_overviews()
    {
        return $this -> hasMany(Website_Overview::class);
    }
    public function invoices()
    {
        return $this -> hasMany(Invoices::class);
    }
    public function receipts()
    {
        return $this -> hasMany(Receipts::class);
    }

}
