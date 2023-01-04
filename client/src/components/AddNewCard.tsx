import React, { FormEvent, useState, createRef } from "react"
import { ComponentThatUseCards } from "../interfaces/CardFunctionality"
import "../assets/NewCard.css"

import { saveData, getCards } from "../api/endPoints.frontend"

export const AddNewCard: React.FC<ComponentThatUseCards> = ({ setCard }) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")

  const inputNameRefference = createRef<HTMLInputElement>()
  const inputDescriptionRefference = createRef<HTMLTextAreaElement>()
  const inputUrlRefference = createRef<HTMLInputElement>()

  const saveFormData = async (e: FormEvent) => {
    e.preventDefault();
    saveData("http://localhost:5000/save", {
      name, description, url
    })
    getCards("http://localhost:5000/get")
    .then(data => setCard(data))
  }

  return (
    <div id="save-new-card-form">
        <form onSubmit={saveFormData} method="post">
          <label htmlFor="name">Nombre de la distribucion</label><br/>
          <input
            type="text"
            ref={inputNameRefference}
            onChange={e => setName(e.target.value)}
          /><br/>
          <label htmlFor="description">Pequeña descripcion de la distribucion</label><br/>
          <textarea
            ref={inputDescriptionRefference}
            onChange={e => setDescription(e.target.value)}
          /><br/>
          <label htmlFor="url">URL a la pagina oficial de la distribucion (si existe)</label><br/>
          <input
            type="text"
            ref={inputUrlRefference}
            onChange={e => setUrl(e.target.value)}
          /><br/>
          <button id="save-button" type="submit">Guardar distribucion</button>
        </form>
    </div>
  )
}

export default AddNewCard