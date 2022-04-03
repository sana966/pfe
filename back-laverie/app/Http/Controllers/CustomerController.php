<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
class CustomerController extends Controller
{
    
    //get customer
public function getCustomer() {
    return response ()->json(Customer::all(),200);
  }

}
