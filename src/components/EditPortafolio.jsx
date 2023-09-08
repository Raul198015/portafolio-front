import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import "./EditportafolioStyle.css"

const url = "http://localhost:8080/api/portafolio"
const EditPortafolio = () => {
const [nombre, setNombre] = useState('')
const [descripcion, setDescripcion] = useState('')
const [urlrepo, setUrlrepo] = useState('')
const [lenguaje, setLenguaje] = useState('')
const navigate = useNavigate()

const {id} = useParams()
const update = async (e) => {
    e.preventDefault()
    await axios.put(`${url}/${id}`, {nombre: nombre, descripcion: descripcion, urlrepo: urlrepo, lenguaje: lenguaje})
    navigate("/")
    
}
useEffect(() => {
    const getCharacterById = async () => {
        const  response = await axios.get(`${url}/${id}`)
        setNombre(response.data.nombre)
        setDescripcion(response.data.descripcion)
        setUrlrepo(response.data.urlrepo)
        setLenguaje(response.data.lenguaje)
        
    }
    getCharacterById()
}, [id])


  return (
    <div className="contenedoredit">
         <h2>Edit</h2>

<form onSubmit={update}>
    <div>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
    </div>
    <div>
        <label>Descripcion</label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
    </div>
    <div>
        <label>Urlrepo</label>
        <input type="text" value={urlrepo} onChange={(e) => setUrlrepo(e.target.value)}/>
    </div>
    <div>
        <label>Lenguaje</label>
        <input type="text" value={lenguaje} onChange={(e) => setLenguaje(e.target.value)}/>
    </div>
    
    <button type="submit">Modificar</button>
</form>
    </div>
  )
}

export default EditPortafolio