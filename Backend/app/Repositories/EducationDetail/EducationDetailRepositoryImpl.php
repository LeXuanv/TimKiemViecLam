<?php

namespace App\Repositories\EducationDetail;

use App\Models\EducationDetail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EducationDetailRepositoryImpl implements EducationDetailRepository
{
    protected $educationDetail;

    public function __construct(EducationDetail $educationDetail)
    {
        $this->educationDetail = $educationDetail;
    }


    public function store($params): EducationDetail
    {
        // DB::beginTransaction();
        // try {
        //     $this->educationDetail->create($params);
        //     DB::commit();
    //     return true;
        // } catch (\Error $e) {
        //     DB::rollBack();
        //     Log::error($e);
        //     return false;
        // }
        return $this->educationDetail->create($params);

    }

    public function updateById($id, $params)
    {
        $educationDetail = $this->findById($id);
        if ($educationDetail) {
            $educationDetail->update($params);
            return true;
        }
        return false;
    }

    public function destroyById($id)
    {
        $educationDetail = $this->findById($id);
        if ($educationDetail) {
            $educationDetail->delete();
            return true;
        }
        return false;
    }

    public function getByJobSeekerId($id)
    {
        return $this->educationDetail->where('job_seeker_id',
            $id)->select('id','university', 'degree', 'major', 'graduation_year', 'gpa')->get();
    }

    public function findById($id): EducationDetail
    {
        return $this->educationDetail->find($id);
    }

}
