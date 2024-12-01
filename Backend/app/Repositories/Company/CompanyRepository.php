<?php

namespace App\Repositories\Company;

use App\Models\Company;

interface   CompanyRepository {
    public function store($params): Company;
    public function update($company, $params): void;

    public function getAll();
    public function getById($id);

    public function saveLogoPath($company, $path);
}
