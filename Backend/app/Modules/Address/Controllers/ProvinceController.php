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
            return new GetProvinceDTO($province->name, $province->code);
        });
        return response()->json($provinceDTOs);
    }

    public function search(Request $request){
        $searchTerm = $request->input('searchTerm');
        if (!$searchTerm) {
            return response()->json(['error' => 'No search term provided'], 400);
        }
        $provinces = Province::where('name', 'like', '%' . $searchTerm . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $provinceDTOs = $provinces->map(function ($province) {
            return new GetProvinceDTO($province->name, $province->code);
        });
        return response()->json($provinceDTOs);
        
    }
}
