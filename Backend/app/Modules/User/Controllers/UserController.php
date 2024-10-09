<?php

namespace App\Modules\User\Controllers;

use App\Events\PaymentCreated;
use App\Events\SendNotificationEvent;
use App\Events\SendNotificationUser;
use App\Http\Controllers\Controller;
use App\Models\Bank;
use App\Models\Group;
use App\Models\Province;
use App\Models\UserBank;
use App\Models\Service;
use App\Models\TransactionHistory;
use App\Models\User;
use App\Models\UserCode;
use App\Modules\User\Requests\StoreRequest;
use App\Modules\User\Requests\StoreUserCode;
use App\Modules\User\Requests\UpdateRequest;
use App\Modules\User\Requests\UpdateUserCode;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;

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
        return view('User::manager.index', compact('users', 'page'));
    }

}
