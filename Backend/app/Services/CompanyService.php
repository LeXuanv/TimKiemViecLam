<?php

namespace App\Services;

use App\Models\Company;
use App\Repositories\Company\CompanyRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

}
