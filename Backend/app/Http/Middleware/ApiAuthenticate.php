<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class ApiAuthenticate extends Middleware
{
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }

    public function handle($request, Closure $next, ...$guards)
    {
        if ($this->authenticate($request, $guards) === 'authentication_failed') {
            return response()->json(['message' => 'Unauthenticated. Please log in.'], 401);
        }

        return $next($request);
    }

    protected function authenticate($request, array $guards)
    {
        if (empty($guards)) {
            $guards = [null];
        }

        foreach ($guards as $guard) {
            if ($this->auth->guard($guard)->check()) {
                return $this->auth->shouldUse($guard);
            }
        }

        return 'authentication_failed';
    }
}
