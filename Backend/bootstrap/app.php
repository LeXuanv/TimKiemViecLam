<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'api-auth' => \App\Http\Middleware\ApiAuthenticate::class,
            'admin' => \App\Http\Middleware\CheckAdmin::class,
            'company' => \App\Http\Middleware\CheckCompany::class,
            'job_seeker' => \App\Http\Middleware\CheckJobSeeker::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
