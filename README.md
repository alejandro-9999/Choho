<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel


1.instalar requerimientos con composer

``` composer install --ignore-platform-reqs ```

2.en la raiz ejectura e iniciar  contenedo docker con sail

```./vendor/bin/sail up -d ```

3.iniciar migraciones con el seeder
```./vendor/bin/sail php artisan:migrate --seed```

4.para conectarse a postman entrar al endpoint

hacer un post a localhost/api/login pasando los parametros JSON



```

{
  "email":"test@choho.com",
  "password":"choho123"
}

```

capturar el  token con esto se puede acceder a los demas endpoint de la api

```
POST:localhost/api/terceros
{
    'nit',
    'razon_social',
    'tipo',
    'activo',
}


GET:localhost/api/terceros



POST:localhost/api/pedidos
{
     'fecha_pedido',
        'prefijo',
        'num_pedido',
        'nit',
        'razon_social',
        'vendedor',
        'departamento',
        'ciudad',
}


GET:localhost/api/pedidos

```
