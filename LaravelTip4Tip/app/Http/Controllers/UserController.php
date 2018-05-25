<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Users;
// header('Access-Control-Allow-Origin: *');


class UserController extends Controller
{
    //
    public function login( Request $request) {
        $email = $request->get('email');
        $password = $request->get('password');
        
        if(Auth::attempt(['email'=>$email, 'password'=>$password])){
            return Auth::user();
        } else {
            return 0;
        }
    }
}
