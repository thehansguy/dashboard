<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    use HasFactory;

    protected $table = "invoices";

    protected $fillable = [
        'user_id',

        'date_issued',	
        'invoice_download_file',     
        'invoice_download_file_path'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
