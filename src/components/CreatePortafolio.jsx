import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./CreatePortafolioStyle.css";

const url = "http://localhost:8080/api/portafolio";

const CreatePortafolio = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlrepo, setUrlrepo] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, {
        nombre: nombre,
        descripcion: descripcion,
        urlrepo: urlrepo,
        lenguaje: lenguaje,
        imagen: imagen,
      });
      navigate("/");
    } catch (error) {
      console.error("Error al crear portafolio:", error);
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
          <label>Lenguaje</label>
          <input type="text" value={lenguaje} onChange={(e) => setLenguaje(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Imagen</label>
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>

        <button type="submit">Crear repositorio</button>
      </form>

      
      <Link to="/">Volver a Home</Link>
    </div>
  );
};

export default CreatePortafolio;
