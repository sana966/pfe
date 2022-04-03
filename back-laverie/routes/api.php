<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WasherController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
********************

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::get('washers',[WasherController::class,'getWasher']);
Route::get('customers',[CustomerController::class,'getCustomer']);
Route::get('services',[ServiceController::class,'getService']);

//get all user 
Route::get('users',[UserController::class,'getUser']);
//add user 
Route::post('addUser',[UserController::class,'addUser']);
//update user 
Route::put('updateUser/{id}',[UserController::class,'updateUser']);
//delete user 
Route::delete('deleteUser/{id}',[UserController::class,'deleteUser']);