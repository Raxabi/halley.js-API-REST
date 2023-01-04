import { CardProps } from "../interfaces/Card"
import { getCards, updateData, deleteData } from "../api/endPoints.frontend"
import "../assets/Card.css"

const Card: React.FC<CardProps> = ({ _id, name, description, url, useButtons, setCard }) => {

  let handleUpdate: () => Promise<void>, handleDelete: () => Promise<void>

  if (setCard) {
    handleUpdate = async () => {
      await updateData("http://localhost:5000/update", _id)
      setCard(await getCards("http://localhost:5000/get"))
    }
  
    handleDelete = async () => {
      await deleteData("http://localhost:5000/delete", _id)
      setCard(await getCards("http://localhost:5000/get"))
    }
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
            <button onClick={() => handleDelete()} type="submit">Eliminar distribucion</button>
          </div>
        : ''
      }
    </div>
  )
}

export default Card