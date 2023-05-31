<?php

namespace Database\Seeders;

use App\Models\DetallePedido;
use App\Models\Pedido;
use App\Models\Sucursal;
use App\Models\Tercero;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        Tercero::factory(20)->create();
        Sucursal::factory(20)->create();
        Pedido::factory(20)->create();
        DetallePedido::factory(20)->create();

        $user = new User();
        $user->name = 'Choho Test';
        $user->email = 'test@choho.com';
        $user->password = Hash::make('choho123');
        $user->save();

    }
}
