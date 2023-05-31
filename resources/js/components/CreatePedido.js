import React, { useState } from 'react';

const CreatePedido = () => {
  const [fechaPedido, setFechaPedido] = useState('');
  const [prefijo, setPrefijo] = useState('');
  const [numPedido, setNumPedido] = useState('');
  const [nit, setNit] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [ciudad, setCiudad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos al servidor
    // Puedes utilizar fetch, axios o cualquier otra librería para hacer la petición

    // Ejemplo de cómo enviar los datos utilizando fetch
    fetch('/api/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fecha_pedido: fechaPedido,
        prefijo,
        num_pedido: numPedido,
        nit,
        razon_social: razonSocial,
        vendedor,
        departamento,
        ciudad,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        console.log(data);
      })
      .catch((error) => {
        // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Crear Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fechaPedido" className="form-label">Fecha Pedido:</label>
          <input type="date" className="form-control" id="fechaPedido" value={fechaPedido} onChange={(e) => setFechaPedido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="prefijo" className="form-label">Prefijo:</label>
          <input type="text" className="form-control" id="prefijo" value={prefijo} onChange={(e) => setPrefijo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="numPedido" className="form-label">Número Pedido:</label>
          <input type="text" className="form-control" id="numPedido" value={numPedido} onChange={(e) => setNumPedido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="nit" className="form-label">NIT:</label>
          <input type="text" className="form-control" id="nit" value={nit} onChange={(e) => setNit(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="razonSocial" className="form-label">Razón Social:</label>
          <input type="text" className="form-control" id="razonSocial" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="vendedor" className="form-label">Vendedor:</label>
          <input type="text" className="form-control" id="vendedor" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento:</label>
          <input type="text" className="form-control" id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">Ciudad:</label>
          <input type="text" className="form-control" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreatePedido;
