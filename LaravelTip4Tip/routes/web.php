<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// use connect project Laravel with ReactJS
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Request-Headers: *');
header('Access-Control-Allow-Headers: *');
// header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
// header('Content-type: application/json');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

Route::get('/', function () {
    return view('welcome');
});

Route::post('login_react', 'UserController@login');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
