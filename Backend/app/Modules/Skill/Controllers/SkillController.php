<?php

namespace App\Modules\Skill\Controllers;

use App\Http\Controllers\Controller;
use App\Services\SkillService;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    private $skillService;

    public function __construct(SkillService $skillService)
    {
        $this->skillService = $skillService;
    }


    public function get()
    {
        return $this->skillService->get();
    }

    public function store(Request $request)
    {
        return $this->skillService->store($request) ? $this->sendResponse('',
            'Store successfully.') : $this->sendResponse('', 'Store failed.');
    }

    public function update(Request $request)
    {
        $update = $this->skillService->update($request);
        return $update['status'] ? $this->sendResponse('',
        'Update successfully.') : $this->sendResponse($update['error'], 'Update failed.');
    }

    public function destroy(Request $request)
    {
        $destroy = $this->skillService->destroy($request);
        return $destroy['status'] ? $this->sendResponse('',
            'Delete successfully.') : $this->sendResponse($destroy['error'], 'Delete failed.');
    }
}
