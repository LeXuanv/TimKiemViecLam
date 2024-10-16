<?php
namespace App\Modules\Address\Controllers;

use App\Models\Province;
use App\Models\District;
use App\Models\Ward;
use App\Modules\Address\DTOs\GetDistrictDTO;
use App\Modules\Address\DTOs\GetProvinceDTO;
use App\Modules\Address\DTOs\GetWardDTO;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AddressController extends Controller
{
    public function getProvinces()
    {
        $provinces = Province::All();
        $provinceDTOs = $provinces->map(function ($province) {
            return new GetProvinceDTO($province->name, $province->code);
        });
        return response()->json($provinceDTOs);
    }

    public function getDistricts($provinceId)
    {
        $districts = District::where('province_code', $provinceId)->get();
        $districtDTOs = $districts->map(function ($district) {
            return new GetDistrictDTO($district->name);
        });
        return response()->json($districtDTOs);
    }

    public function getWards($districtId)
    {
        $wards = Ward::where('district_code', $districtId)->get();
        $wardDTOs = $wards->map(function ($ward) {
            return new GetWardDTO($ward->name);
        });
        return response()->json($wardDTOs);
    }
}
