<?php

namespace App\Modules\Address\Controllers;
use App\Modules\Address\DTOs\GetProvinceDTO;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Province;

class ProvinceController extends Controller
{
    public function index()
    {
        $provinces = Province::All();
        $provinceDTOs = $provinces->map(function ($province) {
            return new GetProvinceDTO($province->name);
        });
        return response()->json($provinceDTOs);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        $province = Province::create([
            'name' => $validatedData['name']
        ]);

        return response()->json([
            'message' => 'Province created successfully',
            'Province' => $province
        ], 201);
    }

    

    public function show($id)
    {
        //
        $province = Province::find($id);

        if (!$province) {
            return response()->json([
                'message' => 'Province not found'
            ], 404);
        }
        
        return response()->json($province);
    }

    
    public function destroy($id)
    {
        $province = Province::find($id);
        
        if (!$province) {
            return response()->json([
                'message' => 'Province not found'
            ], 404);
        }

        $province->delete();

        return response()->json([
            'message' => 'Province deleted successfully'
        ], 204);
    }
    public function search( $name){

        $provinces = Province::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $provinceDTOs = $provinces->map(function ($province) {
            return new GetProvinceDTO($province->name);
        });
        return response()->json($provinceDTOs);
        
    }
}
