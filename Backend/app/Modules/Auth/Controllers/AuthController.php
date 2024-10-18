<?php

namespace App\Modules\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required',
            'role_id' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $this->userService->store($request);


        $token = $user->createToken('auth_token')->plainTextToken;
        $success = [
            'access_token' => $token,
            'token_type' => 'Bearer',
        ];
        return $this->sendResponse($success, 'User login successfully.');

    }

    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['name'] =  $user->name;
            $success['user_id'] = $user->id;
            
            return $this->sendResponse($success, 'User login successfully.');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }
    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) {
            if ($user->currentAccessToken() instanceof \Laravel\Sanctum\TransientToken) {
                Auth::guard('web')->logout();
            } else {
                $user->tokens()->delete();
            }
        }
        return $this->sendResponse('', 'Successfully logged out.');

    }

}
