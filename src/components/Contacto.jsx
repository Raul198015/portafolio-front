import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate desde react-router-dom
import "./ContactoStyle.css"; // Asegúrate de importar tu archivo CSS aquí

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/contacto", formData); // Envia los datos del formulario al backend
      alert("Mensaje enviado con éxito");
      setFormData({
        nombre: "",
        correo: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
      <button onClick={() => navigate("/")}>Volver a Home</button>
    </div>
  );
};

export default Contacto;

