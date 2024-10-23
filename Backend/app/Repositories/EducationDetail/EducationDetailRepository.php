<?php

namespace App\Repositories\EducationDetail;


use App\Models\EducationDetail;

interface   EducationDetailRepository {
    public function store($params);
    public function updateById($id, $params);
    public function destroyById($id);
    public function getByJobSeekerId($id);
    public function findById($id): EducationDetail;
}
