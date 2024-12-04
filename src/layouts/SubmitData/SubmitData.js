// SubmitData.js
import React, { useState } from 'react';
import './SubmitData.css'; // Asegúrate de importar tu archivo CSS

function SubmitData() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos a enviar:', formData); // Log para verificar datos
  
    try {
      const response = await fetch('http://localhost:3001/data', { // Cambia a puerto 3001
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Datos enviados:', formData);
      } else {
        const errorText = await response.text();
        console.error('Error al enviar los datos:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="content">
      <h2>Enviar Datos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default SubmitData;
