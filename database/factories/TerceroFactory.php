<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TerceroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nit' => $this->faker->unique()->numerify('###########'),
            'razon_social' => $this->faker->company,
            'tipo' => $this->faker->randomElement(['Cliente', 'Proveedor', 'Otro']),
            'activo' => $this->faker->boolean,
        ];
    }
}
