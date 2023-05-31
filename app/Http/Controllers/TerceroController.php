<?php

namespace App\Http\Controllers;

use App\Models\Tercero;
use Illuminate\Http\Request;

class TerceroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $terceros = Tercero::all();

        return response()->json($terceros);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tercero = Tercero::create($request->all());

        return response()->json($tercero, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\tercero  $tercero
     * @return \Illuminate\Http\Response
     */
    public function show(tercero $tercero)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\tercero  $tercero
     * @return \Illuminate\Http\Response
     */
    public function edit(tercero $tercero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\tercero  $tercero
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tercero $tercero)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\tercero  $tercero
     * @return \Illuminate\Http\Response
     */
    public function destroy(tercero $tercero)
    {
        //
    }



}
