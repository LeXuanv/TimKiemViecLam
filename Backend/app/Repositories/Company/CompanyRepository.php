<?php

namespace App\Repositories\Company;

use App\Models\Company;

interface   CompanyRepository {
    public function store($params): Company;
    public function update($company, $params): void;
}
