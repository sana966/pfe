<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Models\Washer;
use Illuminate\Http\Request;

class WasherController extends Controller
{
//get washer
public function getWasher() {
      return response ()->json(Washer::all(),200);
     
    }
}
