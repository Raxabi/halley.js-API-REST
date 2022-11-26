import { expectedObjectAPI } from "./interfaces/IncomingData"
import { deleteData } from "../api/endPoints.frontend"
import { affectEffect } from "../api/worksAroundCardQuantityEffect"
import "../assets/Card.css"

const Card: React.FC<expectedObjectAPI> = ({ _id, name, url, updateData }) => {

  const handleDelete = async () => {
    await deleteData("http://localhost:5000/delete", _id)
    updateData!(await affectEffect())
  }

  return (
    <div id="card-wrapper">
      <h1>
        <a href={url}>{name}</a>
      </h1>
      <div id="updaters">
        <button type="submit">Actualizar</button>
        <button onClick={() => handleDelete()} type="submit">Eliminar Tarea</button>
      </div>
    </div>
  )
}

export default Card