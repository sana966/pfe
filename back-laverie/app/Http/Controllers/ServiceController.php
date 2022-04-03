<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Models\Service;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //get Service
    public function getService() {
          return response ()->json(service::all(),200);
        }
    }
