<?php

namespace App\Modules\JobPosition\Controllers;
use App\Modules\JobPosition\DTOs\GetJobPositionDTO;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\JobPosition;

class JobPositionController extends Controller
{
    public function index()
    {
        $jobPositions = JobPosition::All();
        $jobPositionDTOs = $jobPositions->map(function ($jobPosition) {
            return new GetJobPositionDTO($jobPosition->name);
        });
        return response()->json($jobPositionDTOs);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        $jobPosition = JobPosition::create([
            'name' => $validatedData['name']
        ]);

        return response()->json([
            'message' => 'JobPosition created successfully',
            'JobPosition' => $jobPosition
        ], 201);
    }

    

    public function show($id)
    {
        //
        $jobPosition = JobPosition::find($id);

        if (!$jobPosition) {
            return response()->json([
                'message' => 'JobPosition not found'
            ], 404);
        }
        
        return response()->json($jobPosition);
    }

    
    public function destroy($id)
    {
        $jobPosition = JobPosition::find($id);
        
        if (!$jobPosition) {
            return response()->json([
                'message' => 'JobPosition not found'
            ], 404);
        }

        $jobPosition->delete();

        return response()->json([
            'message' => 'JobPosition deleted successfully'
        ], 204);
    }
    public function search( $name){

        $jobPositions = JobPosition::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $jobPositionDTOs = $jobPositions->map(function ($jobPosition) {
            return new GetJobPositionDTO($jobPosition->name);
        });
        return response()->json($jobPositionDTOs);
        
    }
}
