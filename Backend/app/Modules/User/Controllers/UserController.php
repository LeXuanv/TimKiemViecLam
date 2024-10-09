<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller {

    protected UserService $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function index(Request $request)
    {
        $users = $this->userService->getUsers();
        $page = $request->page ?? 1;
        return view('User::index', compact('users', 'page'));
    }

}
