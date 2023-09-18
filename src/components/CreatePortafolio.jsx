import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePortafolioStyle.css";

const url = "http://localhost:8080/api/portafolio";

const CreatePortafolio = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlrepo, setUrlrepo] = useState("");
  const [lenguajes, setLenguajes] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    // Crear FormData para manejar la subida de archivos
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("urlrepo", urlrepo);
    formData.append("lenguajes", lenguajes);
    formData.append("imagen", imagen);  // Asegúrate de que 'imagen' es el nombre esperado en el servidor
    try {
      await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate("/");
    } catch (error) {
      console.error("Error al crear:", error);
    }
  };
  
  return (
    <div className="contenedorportafolio">
      <h2>Crear un elemento</h2>

      <form onSubmit={store}>
        <div className="input-container">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Descripcion</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Urlrepo</label>
          <input type="text" value={urlrepo} onChange={(e) => setUrlrepo(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Lenguajes</label>
          <input type="text" value={lenguajes} onChange={(e) => setLenguajes(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Imagen</label>
          <input type="file"  onChange={(e) => setImagen(e.target.files[0])} />
        </div>

        <button type="submit">Crear repositorio</button>
      </form>

      <button onClick={() => navigate("/")}>Volver a Home</button>
    </div>
  );
};

export default CreatePortafolio;

