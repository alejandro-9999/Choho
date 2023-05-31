<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tercero extends Model
{
    protected $fillable = [
        'nit',
        'razon_social',
        'tipo',
        'activo',
    ];
    use HasFactory;
}
