<?php

namespace App\Modules\User\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }
    public function getAll(){
        return $this->userService->getAll();
    }
    public function deleteUser($userId){
        return $this->userService->deleteUser($userId);
    }
    public function show(Request $request)
    {
        $user = $request->user();
        return $this->userService->show($user);
    }

    public function edit(Request $request)
    {
        $user = $request->user();
        return $this->userService->edit($user);
    }
    public function update(Request $request)
    {
        $user = $request->user();
        $this->userService->update($user, $request->all());
        return $this->sendResponse('', 'User update successfully.');
    }
    public function changePassword(Request $request)
    {
        try {
            $user = $request->user(); 
            $this->userService->changePassword($user, $request);
            return $this->sendResponse('', 'Password changed successfully.');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['error' => 'Email not found.'], 404);
        }

        $verificationCode = Str::random(6);
        $user->update([
            'verification_code' => $verificationCode,
            'verification_code_expires_at' => now()->addMinutes(15),
        ]);

        Mail::send('forgot-password', ['code' => $verificationCode], function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Mã xác thực thay đổi mật khẩu');
        });

        return response()->json(['message' => 'A verification code has been sent to your email.']);
    }
    public function checkVerificationCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'verification_code' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['error' => 'Email không tồn tại'], 404);
        }

        if ($user->verification_code !== $request->verification_code) {
            return response()->json(['error' => 'Mã xác thực không chính xác'], 400);
        }

        if ($user->verification_code_expires_at < now()) {
            return response()->json(['error' => 'Mã xác thực hết hạn'], 400);
        }

        return response()->json(['message' => 'Mã xác thực chính xác']);
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'verification_code' => 'required|string',
            'new_password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user || !$user->verification_code) {
            return response()->json(['error' => 'error'], 404);
        }

        $user->update([
            'password' => Hash::make($request->new_password),
            'verification_code' => null,
            'verification_code_expires_at' => null,
        ]);

        return response()->json(['message' => 'Mật khẩu mới đã được cập nhật']);
    }

    public function destroy(Request $request)
    {
        $user = $request->user();
        $this->userService->destroy($user);

        return $this->sendResponse('', 'User delete successfully.');
    }

}
