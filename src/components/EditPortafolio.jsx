import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditportafolioStyle.css";

const url = "http://localhost:8080/api/portafolio";

const EditPortafolio = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlrepo, setUrlrepo] = useState("");
  const [lenguajes, setLenguajes] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/${id}`, {
        nombre: nombre,
        descripcion: descripcion,
        urlrepo: urlrepo,
        lenguajes: lenguajes,
        imagen: imagen,
      });
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  useEffect(() => {
    const getCharacterById = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setUrlrepo(response.data.urlrepo);
        setLenguajes(response.data.lenguajes);
        setImagen(response.data.imagen);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getCharacterById();
  }, [id]);

  return (
    <div className="contenedoredit">
      <h2>Edit</h2>

      <form onSubmit={update}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripcion</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label>Urlrepo</label>
          <input
            type="text"
            value={urlrepo}
            onChange={(e) => setUrlrepo(e.target.value)}
          />
        </div>
        <div>
          <label>Lenguajes</label>
          <input
            type="text"
            value={lenguajes}
            onChange={(e) => setLenguajes(e.target.value)}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </div>

        <button type="submit">Modificar</button>
      </form>
    </div>
  );
};

export default EditPortafolio;

