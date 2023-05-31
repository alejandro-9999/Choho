import React, { useEffect, useState } from 'react';

const TerceroList = () => {
  const [terceros, setTerceros] = useState([]);

  useEffect(() => {
    fetch('/api/terceros')
      .then((response) => response.json())
      .then((data) => {
        setTerceros(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Terceros</h2>
      <table className='table table-sm table-striped'>
        <thead>
            <tr>
                <th>NIT</th>
                <th>Razón Social</th>
                <th>Tipo</th>
                <th>Activo</th>
            </tr>
        </thead>
        <tbody>
        {terceros.map((tercero) => (
            <tr key={tercero.id}>
                <td> {tercero.nit}</td>
                <td> {tercero.razon_social}</td>
                <td> {tercero.tipo}</td>
                <td> {tercero.activo ? 'Sí' : 'No'}</td>
            </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
};

export default TerceroList;
