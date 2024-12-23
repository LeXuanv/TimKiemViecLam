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

    public function update($company, $params)
    {
        return $company->update($params);
    }

    public function getAll()
    {
        return $this->company->paginate(9);
    }
    public function getAllByAdmin()
    {
        return $this->company->paginate(10);
    }
    public function getById($id){
        return $this->company->find($id);
    }


    public function saveLogoPath($company, $path)
    {
        $company->logo = $path;
        $company->save();
    }

    public function deleteById($id)
    {
        $company = $this->getById($id);
        if ($company) {
            return $company->delete();
        }
        return false;
    }
}
