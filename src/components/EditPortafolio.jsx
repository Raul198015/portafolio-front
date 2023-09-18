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
  const [imagen, setImagen] = useState(null); // Para la nueva imagen
  const [imagenUrl, setImagenUrl] = useState(""); // Para la URL de la imagen existente
  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    try {
      // Crear FormData para manejar la subida de archivos
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("descripcion", descripcion);
      formData.append("urlrepo", urlrepo);
      formData.append("lenguajes", lenguajes);
      formData.append("imagen", imagen); // Nueva imagen, si se selecciona
      
      // Realizar la actualización enviando los datos al servidor
      await axios.put(`${url}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  useEffect(() => {
    const getPortafolioById = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setUrlrepo(response.data.urlrepo);
        setLenguajes(response.data.lenguajes);
        setImagenUrl(response.data.imagenUrl); // Establecer la URL de la imagen existente
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getPortafolioById();
  }, [id]);

  return (
    <div className="contenedoredit">
      <h2>Editar</h2>

      <form onSubmit={update}>
        
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
        <div>
          <label>Imagen Actual</label>
          {imagenUrl && <img src={imagenUrl} alt="Imagen Actual" />}
        </div>
        <div>
          <label>Subir Nueva Imagen</label>
          <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
        </div>

        <button type="submit">Modificar</button>
      </form>
    </div>
  );
};

export default EditPortafolio;


