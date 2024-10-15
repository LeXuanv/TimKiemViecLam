<?php

namespace App\Repositories\Company;

use App\Models\Company;

interface   CompanyRepository {
    public function store($params): Company;
    public function getInfoById($id);
    public function updateById($user): void;
    public function destroyById($id): void;
}
