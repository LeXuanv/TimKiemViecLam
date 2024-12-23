<?php

namespace App\Repositories\Company;

use App\Models\Company;

interface   CompanyRepository {
    public function store($params): Company;
    public function update($company, $params);
    public function getAll();
    public function getAllByAdmin();
    public function getById($id);
    public function saveLogoPath($company, $path);
    public function deleteById($id);
}
