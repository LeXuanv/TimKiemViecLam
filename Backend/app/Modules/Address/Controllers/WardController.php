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
            return new GetWardDTO($ward->name);
        });
        return response()->json($wardDTOs);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        $ward = Ward::create([
            'name' => $validatedData['name']
        ]);

        return response()->json([
            'message' => 'Ward created successfully',
            'Ward' => $ward
        ], 201);
    }

    

    public function show($id)
    {
        //
        $ward = Ward::find($id);

        if (!$ward) {
            return response()->json([
                'message' => 'Ward not found'
            ], 404);
        }
        
        return response()->json($ward);
    }

    
    public function destroy($id)
    {
        $ward = Ward::find($id);
        
        if (!$ward) {
            return response()->json([
                'message' => 'Ward not found'
            ], 404);
        }

        $ward->delete();

        return response()->json([
            'message' => 'Ward deleted successfully'
        ], 204);
    }
    public function search( $name){

        $wards = Ward::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $wardDTOs = $wards->map(function ($ward) {
            return new GetWardDTO($ward->name);
        });
        return response()->json($wardDTOs);
        
    }
}
