<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestroyUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function create()
    {
        return view('user.register');
    }

    public function store(Request $request)
    {
        $this->userService->store($request);

        toastr()->closeButton(true)->addSuccess('Tạo tài khoản thành công ! <br> Đăng nhập để tiếp tục');

        return redirect()->route('welcome.index');
    }

    public function active($id, $token){
        $user = User::find($id);
        if($user->token == $token) {
            $user->update(['status' => 1, 'token' => null]);
            return redirect()->route('user.show', session('id'));
        }
    }

    public function show($id)
    {
        try {
            $viewData = [
                'user' => $this->userService->info($id),
            ];
            return view('user.info')->with($viewData);
        } catch (Exception $e){
            toastr()->closeButton(true)->addError($e->getMessage());
            return redirect()->back();
        }

    }

    public function edit(User $user)
    {

        if ($user->id == session('id')){
            $viewData = [
                'user' => $user
            ];
            return view('user.edit')->with($viewData);
        } else {
            return redirect()->back();
        }
//        $viewData = [
//            'user' => $user
//        ];
//        return view('user.edit')->with($viewData);
    }

    public function update(UpdateUserRequest $request, $user)
    {
        $this->userService->update($request, $user);

        toastr()->closeButton(true)->addSuccess('Cập nhật thành công !');

        return redirect()->route('user.show', $user);
    }

    public function destroy(DestroyUserRequest $request, $user)
    {
        $this->userService->destroy($user);

        toastr()->closeButton(true)->addSuccess('Xoá thành công !');

        return redirect()->route('welcome.index');
    }
}
