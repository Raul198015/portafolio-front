import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DeleteCharacter from "./DeletePortafolio";
import "./showPortafolioStyle.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const url = "http://localhost:8080/api/portafolio";

const ShowCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    const response = await axios.get(url);
    let data = response.data;
    setCharacters(data);
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="show-portafolio-container">
        {characters.map((character) => (
          <div key={character.id} className="card">
            <h2>Repositorio</h2>
            <h3>Nombre</h3>
            <p>{character.nombre}</p>
            <h3>Descripción</h3>
            <p>{character.descripcion}</p>
            <h3>Urlrepo</h3>
            <p>{character.urlrepo}</p>
            <h3>Lenguajes</h3>
            <p>{character.lenguajes}</p>
            <h3>Imagen</h3>
            <div className="imgcontenedor">
              {character.imagen && <img src={character.imagen} alt={`Imagen de ${character.nombre}`} />}
            </div>
            <div className="button-container">
              <NavLink to={`/edit/${character.id}`} className="edit-button">
                <button>editar</button>
              </NavLink>
            </div>
            <DeleteCharacter id={character.id} onDelete={getAllCharacters} />
            <NavLink to="/" className="home-button">
              <button>Home</button>
            </NavLink>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShowCharacters;
