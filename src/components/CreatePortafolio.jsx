import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      await axios.post(url, { nombre: nombre, descripcion: descripcion, urlrepo: urlrepo, lenguaje: lenguaje, imagen: imagen });
      navigate("/");
    } catch (error) {
      console.error("Error al crear portafolio:", error);
    }
  };
  

  return (
    <div className="contenedorportafolio">
      <h2>Crear un elemento</h2>

      <form onSubmit={store}>
        <div>
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div>
          <label>Urlrepo</label>
          <input type="text" value={urlrepo} onChange={(e) => setUrlrepo(e.target.value)} />
        </div>
        <div>
          <label>Lenguaje</label>
          <input type="text" value={lenguaje} onChange={(e) => setLenguaje(e.target.value)} />
        </div>
        <div>
          <label>Imagen</label>
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>

        <button type="submit">Crear repositorio</button>
      </form>
    </div>
  );
};

export default CreatePortafolio