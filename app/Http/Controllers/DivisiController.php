<?php

namespace App\Http\Controllers;

use App\Http\Requests\DivisiRequest;
use App\Models\Divisi;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DivisiController extends Controller
{
    /**
     * index
     *
     * @return View
     */
    public function index()
    {
            $divisis = Divisi::query()->get();
            return response()->json(['divisis' => $divisis]);    }

    /**
     * store
     *
     * @param  mixed $request
     * @return RedirectResponse
     */
    public function store(DivisiRequest $request)
    {
        Divisi::query()
            ->create($request->validated());
            $response = [
                'success' => 'Berhasil menambahkan divisi'
            ];
            return response()->json($response);    
    }

    /**
     * update
     *
     * @param  mixed $divisi
     * @param  mixed $request
     * @return RedirectResponse
     */
    public function update(Divisi $divisi, DivisiRequest $request): RedirectResponse
    {
        $divisi
            ->update($request->validated());
        return redirect()->back()->with('success', 'Berhasil merubah divisi');
    }

    /**
     * destroy
     *
     * @param  mixed $divisi
     * @return RedirectResponse
     */
    public function destroy(Divisi $divisi):  RedirectResponse
    {
        $divisi->delete();
        return redirect()->back()->with('success', 'Berhasil menghapus divisi');
    }
}
