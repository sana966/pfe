<?php


namespace App\Http\Controllers\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use Notifiable;

    public $remember_token = false;
    public $created_at = false ;
    public $updated_at = false;
    
   
    protected $fillable =['id','first_name','last_name','email','address','password'];
}
