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
            return new GetDistrictDTO($district->name, $district->code);
        });
        return response()->json($districtDTOs);
    }

    public function getWards($districtId)
    {
        $wards = Ward::where('district_code', $districtId)->get();
        $wardDTOs = $wards->map(function ($ward) {
            return new GetWardDTO($ward->name, $ward->code);
        });
        return response()->json($wardDTOs);
    }
    public function getDetailWards($wardCode)
    {
        $ward = Ward::where('code', $wardCode)->first();
        if (!$ward) {
            return response()->json(['error' => 'Ward not found'], 404);
        }

        $district = District::where('code', $ward->district_code)->first();
        if (!$district) {
            return response()->json(['error' => 'District not found'], 404);
        }

        $province = Province::where('code', $district->province_code)->first();
        if (!$province) {
            return response()->json(['error' => 'Province not found'], 404);
        }

        return response()->json([
            
            'ward_name' => $ward->name,
            'ward_code' => $ward->code,
            'district_name' => $district->name,
            'district_code' => $district->code,
            'province_name' => $province->name,
            'province_code' => $province->code,
        ]);
    }

}
