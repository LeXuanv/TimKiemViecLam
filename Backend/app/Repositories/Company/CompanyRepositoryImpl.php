<?php

namespace App\Repositories\Company;

use App\Models\Company;

class CompanyRepositoryImpl implements CompanyRepository
{
    protected $company;

    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    public function store($params): Company
    {
        return $this->company->create($params);
    }

    public function getInfoById($id)
    {
        return Company::find($id);
    }

    public function updateById($company): void
    {
        $company->save();
    }

    public function destroyById($id): void
    {
        $company = Company::find($id);
        $company->delete();
    }
}
