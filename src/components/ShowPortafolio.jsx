import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import DeleteCharacter from "./DeletePortafolio";
import './showPortafolioStyle.css'

const url = "http://localhost:8080/api/portafolio"

const ShowCharacters = () => {
    

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
        console.log(data)
    }

    return (
        <div className="show-portafolio-container"    >
            <div>
                <NavLink to="/create">
                    <button className="btn btn-primary">Create</button>
                </NavLink>
            </div >
            {characters.map(character => (
                <div key={character.id} className="card">
                    <img src={character.img} alt="" className="img" />
                    <h3>{character.nombre}</h3>
                    <p>{character.descripcion}</p> 
                    <p>{character.urlrepo}</p>
                    <p>{character.lenguaje}</p>
                    <NavLink to={`/edit/${character.id}`}><button>editar</button></NavLink>
                    <DeleteCharacter id={character.id} onDelete={getAllCharacters} />
                </div>
            ))}
        </div>
    )
}

export default ShowCharacters