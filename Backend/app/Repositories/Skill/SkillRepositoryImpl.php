<?php

namespace App\Repositories\Skill;

use App\Models\Skill;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SkillRepositoryImpl implements SkillRepository
{
    protected $skill;

    public function __construct(Skill $skill)
    {
        $this->skill = $skill;
    }

    public function getAllSkill()
    {
        return $this->skill->select('id', 'name')->get();
    }

    public function store($params)
    {
        DB::beginTransaction();
        try {
            $this->skill->create($params);
            DB::commit();
            return true;
        } catch (\Error $e) {
            DB::rollBack();
            Log::error($e);
            return false;
        }
    }

    public function updateById($id, $params)
    {
        $skill = $this->findById($id);
        if ($skill) {
            $skill->update($params);
            return true;
        }
        return false;
    }

    public function destroyById($id)
    {
        $skill = $this->findById($id);
        if ($skill) {
            $skill->delete();
            return true;
        }
        return false;
    }

    public function findById($id): Skill
    {
        return $this->skill->find($id);
    }
}
