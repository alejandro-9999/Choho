import React, { useState } from 'react';

const CreateTerceros = () => {
  const [nit, setNit] = useState('');
  const [razon_social, setrazon_social] = useState('');
  const [tipo, setTipo] = useState('');
  const [activo, setActivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('/api/terceros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nit, razon_social, tipo, activo }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Crear Terceros</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>NIT:</label>
          <input className='form-control' type="text" value={nit} onChange={(e) => setNit(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Razón Social:</label>
          <input className='form-control' type="text" value={razon_social} onChange={(e) => setrazon_social(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Tipo:</label>
          <input className='form-control' type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Activo:</label>
          <input className='form-check' type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)} />
        </div>
        <button className='form-control btn btn-success mt-2' type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateTerceros;
