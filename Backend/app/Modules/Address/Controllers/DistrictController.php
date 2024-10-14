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
            return new GetDistrictDTO($district->name);
        });
        return response()->json($districtDTOs);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        $district = District::create([
            'name' => $validatedData['name']
        ]);

        return response()->json([
            'message' => 'District created successfully',
            'District' => $district
        ], 201);
    }

    

    public function show($id)
    {
        //
        $district = District::find($id);

        if (!$district) {
            return response()->json([
                'message' => 'District not found'
            ], 404);
        }
        
        return response()->json($district);
    }

    
    public function destroy($id)
    {
        $district = District::find($id);
        
        if (!$district) {
            return response()->json([
                'message' => 'District not found'
            ], 404);
        }

        $district->delete();

        return response()->json([
            'message' => 'District deleted successfully'
        ], 204);
    }
    public function search( $name){

        $districts = District::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $districtDTOs = $districts->map(function ($district) {
            return new GetDistrictDTO($district->name);
        });
        return response()->json($districtDTOs);
        
    }
}
