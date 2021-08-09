<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipts extends Model
{
    use HasFactory;

    protected $table = "receipts";

    protected $fillable = [
        'user_id',

        'date_issued',	
        'receipt_download_file',
        'receipt_download_file_path'             
        
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
