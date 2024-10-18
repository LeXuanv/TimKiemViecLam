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

    public function search( $name){

        $provinces = Province::where('name', 'like', '%' . $name . '%')
                          ->orderBy('name', 'asc')
                          ->get();
        $provinceDTOs = $provinces->map(function ($province) {
            return new GetProvinceDTO($province->name, $province->code);
        });
        return response()->json($provinceDTOs);
        
    }
}
