<?php


namespace App\Modules\Company\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CompanyService;
use Illuminate\Http\Request;
use App\Models\Company;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{

    public function __construct(private readonly CompanyService $companyService)
    {

    }
    public function uploadLogo(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if ($request->hasFile('logo')) {
            $path = $this->companyService->uploadLogo($user, $request);
            return response()->json(['message' => 'Logo uploaded successfully!', 'path' => $path]);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }
    public function searchByName(Request $request){
        $searchTerm = $request->input('searchTerm');
        return $this->companyService->searchByName($searchTerm);
    }
    public function getAll()
    {
        return $this->companyService->getAll();
    }
    public function getById($id)
    {
        return $this->companyService->getById($id);
    }
}
