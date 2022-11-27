import { DBResult } from "./interfaces/Card"
import { updateData, deleteData } from "../api/endPoints.frontend"
import { affectEffect } from "../api/worksAroundCardQuantityEffect"
import "../assets/Card.css"

const Card: React.FC<DBResult> = ({ _id, name, description, url, useButtons, updateDataFunction }) => {

  const handleUpdate = async () => {
    await updateData("http://localhost:5000/update", _id)
    updateDataFunction!(await affectEffect())
  }

  const handleDelete = async () => {
    await deleteData("http://localhost:5000/delete", _id)
    updateDataFunction!(await affectEffect())
  }

  return (
    <div id="card">
      <h1>
        <a href={url} target={"_blank"}>{name}</a>
      </h1>
      <p>{description}</p>
      {
        useButtons ? 
          <div id="updaters">
            <button onClick={() => handleUpdate()} type="submit">Actualizar</button>
            <button onClick={() => handleDelete()} type="submit">Eliminar Tarea</button>
          </div>
        : ''
      }
    </div>
  )
}

export default Card