<?php

namespace App\Services;

use App\Models\Company;
use App\Repositories\Company\CompanyRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class CompanyService
{
    public function __construct(
        private readonly CompanyRepository $companyRepository,
    ) {
    }

    public function store($params)
    {
        $this->companyRepository->store($params);
    }

    public function update($company, $params)
    {
        $this->companyRepository->update($company, $params);
    }

    public function getAll()
    {
        return $this->companyRepository->getAll();
    }

    public function uploadLogo($user, $request)
    {
        $image = $request->file('logo');

        $name = rand();
        $path = 'images/company/' . $name . '.' . pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
        if (!Storage::disk('public')->exists('images/company')) {
            Storage::disk('public')->makeDirectory('images/company');
        }
        Storage::disk('public')->put($path, file_get_contents($image));

        $company = Company::where('user_id', $user->id)->first();
        if ($company) {
            $old_path = $company->logo;
            if (isset($old_path) and Storage::disk('public')->exists($old_path)) {
                Storage::disk('public')->delete($old_path);
            }
            $this->companyRepository->saveLogoPath($company, $path);
        }

        return $path;

    }
}
