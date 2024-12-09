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
    
        $newPassword = Str::random(10);
        $user->update([
            'password' => Hash::make($newPassword),
        ]);
    
        Mail::send('forgot-password', ['password' => $newPassword], function ($message) use ($user) {
            $message->to($user->email)
                    ->subject('Mật khẩu mới của bạn');
        });
    
        return response()->json(['message' => 'A new password has been sent to your email.']);
    }
    public function sendTestEmail()
    {
        $recipient = 'buivanthieu108@gmail.com';
        $subject = 'Test Email from Laravel';
        $body = 'This is a test email sent from Laravel app!';

        Mail::raw($body, function ($message) use ($recipient, $subject) {
            $message->to($recipient)
                    ->subject($subject);
        });

        return 'Email sent successfully!';
    }
    public function destroy(Request $request)
    {
        $user = $request->user();
        $this->userService->destroy($user);

        return $this->sendResponse('', 'User delete successfully.');
    }

}
