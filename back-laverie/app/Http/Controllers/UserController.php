<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller

{
    //get USER
    public function getUser() 
       {
         return response ()->json(User::all(),200);

       }

          //add User
    public function addUser(Request $request) 
       {
        $user =User :: create( $request -> all());
        return response ($user,201);
       }

        //update User
        public function updateUser(Request $request, $id) 
        {
            $user =User :: find($id);
            if(is_null($user)){
                return response()->json(['message'=> 'user not found '],404);
            }
            $user -> update($request-> all());
            return response ($user,200);
        }
        //delete User
        public function deleteUser(Request $request, $id) 
        {
            $user =User :: find($id);
            if(is_null($user)){
                return response()->json(['message'=> 'user not found '],404);
            }
            $user -> delete();
            return response()->json(['message'=> 'user is deleted '],404);
            //return response (null,204);
        }
    }