<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }


    public function show(Request $request)
    {
        $user = $request->user();
        return $this->userService->show($user);
    }

    public function update(Request $request)
    {
        $user = $request->user();
        $this->userService->update($user, $request->all());
        return $this->sendResponse('', 'User update successfully.');
    }

    public function destroy(Request $request)
    {
        $user = $request->user();
        $this->userService->destroy($user);

        return $this->sendResponse('', 'User delete successfully.');
    }
}
