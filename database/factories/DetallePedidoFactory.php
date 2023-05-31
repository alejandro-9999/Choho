<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DetallePedidoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'prefijo' => $this->faker->randomElement(['R1', 'R2', 'R3']),
            'num_pedido' => $this->faker->unique()->randomNumber(5),
            'perfil' => $this->faker->word,
            'familia' => $this->faker->word,
            'grupo' => $this->faker->word,
            'id_producto' => $this->faker->unique()->randomNumber(5),
            'descripcion' => $this->faker->sentence,
            'subtotal' => $this->faker->randomFloat(2, 0, 1000),
            'iva' => $this->faker->randomFloat(2, 0, 1000),
            'total' => $this->faker->randomFloat(2, 0, 1000),
        ];
    }
}
