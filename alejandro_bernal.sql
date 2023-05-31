use mysql;

-- 2. Cree los DDL scripts para crear las tablas con sus respectivas llaves, teniendo en cuenta la
-- referencia de la Imagen 1.


-- DBeaver

-- Creo las tablas

CREATE TABLE terceros (
  nit VARCHAR(20) PRIMARY KEY,
  razon_social VARCHAR(255),
  tipo VARCHAR(50),
  activo VARCHAR(1)
);


-- Genero la relacion foranea
CREATE TABLE sucursales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_sucursal VARCHAR(20),
  telefono VARCHAR(20),
  direccion VARCHAR(255),
  departamento VARCHAR(100),
  ciudad VARCHAR(100),
  FOREIGN KEY (id_sucursal) REFERENCES terceros(nit)
);

CREATE TABLE pedidos (
  fecha_pedido DATE,
  prefijo VARCHAR(10),
  num_pedido INT,
  nit VARCHAR(20),
  razon_social VARCHAR(255),
  vendedor VARCHAR(100),
  departamento VARCHAR(100),
  ciudad VARCHAR(100),
  FOREIGN KEY (nit) REFERENCES terceros(nit)
);

CREATE TABLE detalle_pedidos (
  prefijo VARCHAR(10),
  num_pedido INT,
  perfil VARCHAR(100),
  familia VARCHAR(100),
  grupo VARCHAR(100),
  id_producto INT,
  descripcion VARCHAR(255),
  subtotal DECIMAL(10,2),
  iva DECIMAL(10,2),
  total DECIMAL(10,2)
);



-- 3. Cree los DML scripts para adicionar los registros según la Imagen 2 y, la Imagen 3


INSERT INTO terceros (nit, razon_social, tipo, activo)
VALUES ('901417592', 'MOTOS CALIFORNIA SA', 'CLIENTE', 'S');

INSERT INTO terceros (nit, razon_social, tipo, activo)
VALUES ('830125345', 'REPARACIONES PEPITO FLOREZLTDA', 'CLIENTE', 'S');


INSERT INTO terceros (nit, razon_social, tipo, activo)
VALUES ('800525893', 'SUMINISTROS EN REPUESTOS SAS', 'PROVEEDOR', 'S');





-- 4. Cree un DML script para modificar en la tabla terceros (Imagen 2) del cliente MOTOS
-- CALIFORNIA SA, el tipo por 'PROVEEDOR'.


UPDATE terceros  SET tipo = 'PROVEEDOR' WHERE razon_social = 'MOTOS CALIFORNIA SA';



-- 5. Cree una consulta a partir de la tabla detalle_pedidos (Imagen 5), ordene los registros por
-- cliente y número de pedido, y que la selección de la data muestre los siguientes campos: prefijo,
-- num_pedido, familia, id_producto y descripción.


SELECT prefijo, num_pedido, familia, id_producto, descripcion FROM detalle_pedidos ORDER BY  num_pedido;



-- 6. Cree una consulta donde seleccione los registros entre las tablas pedidos (Imagen 4) y
-- detalle_pedidos (Imagen 5), en la que muestre los siguientes campos: prefijo, num_pedido,
-- fecha_pedido, nit, razon_social, vendedor, id_producto, descripción, grupo, subtotal, iva y total.


SELECT p.prefijo, p.num_pedido, p.fecha_pedido, p.nit, p.razon_social, p.vendedor, d.id_producto, d.descripcion, d.grupo, d.subtotal, d.iva, d.total
FROM pedidos p JOIN detalle_pedidos d ON p.prefijo = d.prefijo AND p.num_pedido = d.num_pedido;


-- 7. Cree un DML script que elimine de la tabla detalle_pedidos (Imagen 5), los registros con número
-- de pedido 56292, 56293, 56297 y 56299.


DELETE FROM detalle_pedidos WHERE num_pedido IN (56292, 56293, 56297, 56299);


