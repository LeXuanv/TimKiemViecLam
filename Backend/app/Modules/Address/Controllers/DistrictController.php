<?php

namespace App\Modules\Address\Controllers;
use App\Modules\Address\DTOs\GetDistrictDTO;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\District;

class DistrictController extends Controller
{
    public function index()
    {
        $districts = District::All();
        $districtDTOs = $districts->map(function ($district) {
            return new GetDistrictDTO($district->name, $district->code);
        });
        return response()->json($districtDTOs);
    }


    
    public function search(Request $request){
        $searchTerm = $request->input('searchTerm');
        if (!$searchTerm) {
            return response()->json(['error' => 'No search term provided'], 400);
        }

        $districts = District::where('name', 'like', '%' . $searchTerm . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $districtDTOs = $districts->map(function ($district) {
            return new GetDistrictDTO($district->name, $district->code);
        });
        return response()->json($districtDTOs);
        
    }
}
