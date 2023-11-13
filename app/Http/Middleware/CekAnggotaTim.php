<?php

namespace App\Http\Middleware;

use App\Models\Tim;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CekAnggotaTim
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $code = $request->route('code');

        if (Auth::check()) {
            $user = Auth::user();
            
            $anggota = $user->tim->contains('code', $code);

            if ($anggota) {
                return $next($request);
            }
        }

        return back()->with('error', 'Anda tidak memiliki akses ke tim ini.');
    }

}
