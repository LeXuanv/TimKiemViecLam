<?php

namespace App\Modules\Category\Controllers;
use App\Modules\Category\DTOs\GetCategoryDTO;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::All();
        $categoryDTOs = $categories->map(function ($category) {
            return new GetCategoryDTO($category->name);
        });
        return response()->json($categoryDTOs);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        $category = Category::create([
            'name' => $validatedData['name']
        ]);

        return response()->json([
            'message' => 'category created successfully',
            'category' => $category
        ], 201);
    }

    

    public function show($id)
    {
        //
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'message' => 'category not found'
            ], 404);
        }
        
        return response()->json($category);
    }

    
    public function destroy($id)
    {
        $category = Category::find($id);
        
        if (!$category) {
            return response()->json([
                'message' => 'category not found'
            ], 404);
        }

        $category->delete();

        return response()->json([
            'message' => 'category deleted successfully'
        ], 204);
    }
    public function search( $name){

        $categories = Category::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $categoryDTOs = $categories->map(function ($category) {
            return new GetCategoryDTO($category->name);
        });
        return response()->json($categoryDTOs);
        
    }
}
