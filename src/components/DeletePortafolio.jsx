import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./DeletePortafolioStyle.css"

const DeletePortafolio = ({ id, onDelete }) => {
  const navigate = useNavigate()

  const deletePortafolio = async () => {
    const confirmed = window.confirm("¿Quieres eliminar este repositorio?")

    if (confirmed) {
      await axios.delete(`http://localhost:8080/api/portafolio/${id}`)
      onDelete()
      navigate("/")
    }
  }

  return (
    <div className="delete">
      <button onClick={deletePortafolio}>Eliminar repositorio</button>
    </div>
  )
}

export default DeletePortafolio