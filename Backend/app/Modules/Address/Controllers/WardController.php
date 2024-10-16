<?php

namespace App\Modules\Address\Controllers;
use App\Modules\Address\DTOs\GetWardDTO;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Ward;

class WardController extends Controller
{
    public function index()
    {
        $wards = Ward::All();
        $wardDTOs = $wards->map(function ($ward) {
            return new GetWardDTO($ward->name, $ward->code);
        });
        return response()->json($wardDTOs);
    }


    public function search( $name){

        $wards = Ward::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $wardDTOs = $wards->map(function ($ward, ) {
            return new GetWardDTO($ward->name, $ward->code);
        });
        return response()->json($wardDTOs);
        
    }
}
