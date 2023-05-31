<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PedidoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'fecha_pedido' => $this->faker->date,
            'prefijo' => $this->faker->randomElement(['R1', 'R2', 'R3']),
            'num_pedido' => $this->faker->unique()->randomNumber(5),
            'nit' => $this->faker->unique()->numerify('###########'),
            'razon_social' => $this->faker->company,
            'vendedor' => $this->faker->name,
            'departamento' => $this->faker->state,
            'ciudad' => $this->faker->city,
        ];
    }
}
