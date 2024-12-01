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

    public function update($company, $params): void
    {
        $company->update($params);
    }

    public function getAll()
    {
        return $this->company->all();
    }
    public function getById($id){
        return $this->company->find($id);
    }
    

    public function saveLogoPath($company, $path)
    {
        $company->logo = $path;
        $company->save();
    }
}
