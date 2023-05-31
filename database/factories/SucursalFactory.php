<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SucursalFactory extends Factory
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
            'telefono' => $this->faker->phoneNumber,
            'direccion' => $this->faker->address,
            'departamento' => $this->faker->state,
            'ciudad' => $this->faker->city,
        ];
    }
}
