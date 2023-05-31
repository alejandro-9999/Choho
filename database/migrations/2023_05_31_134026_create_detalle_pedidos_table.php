<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetallePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_pedidos', function (Blueprint $table) {
            $table->id();
            $table->string('prefijo');
            $table->integer('num_pedido');
            $table->string('perfil');
            $table->string('familia');
            $table->string('grupo');
            $table->integer('id_producto');
            $table->string('descripcion');
            $table->decimal('subtotal', 8, 2);
            $table->decimal('iva', 8, 2);
            $table->decimal('total', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_pedidos');
    }
}
