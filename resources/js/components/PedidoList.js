import React, { useEffect, useState } from 'react';

const ListPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch('/api/pedidos')
      .then((response) => response.json())
      .then((data) => {
        setPedidos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Lista de Pedidos</h2>
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>Fecha Pedido</th>
            <th>Prefijo</th>
            <th>Número Pedido</th>
            <th>NIT</th>
            <th>Razón Social</th>
            <th>Vendedor</th>
            <th>Departamento</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.fecha_pedido}</td>
              <td>{pedido.prefijo}</td>
              <td>{pedido.num_pedido}</td>
              <td>{pedido.nit}</td>
              <td>{pedido.razon_social}</td>
              <td>{pedido.vendedor}</td>
              <td>{pedido.departamento}</td>
              <td>{pedido.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPedidos;
