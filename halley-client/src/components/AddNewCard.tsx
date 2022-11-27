import React, { FormEvent, useState, createRef } from "react"
import { saveData } from "../api/endPoints.frontend"
import { affectEffect } from "../api/worksAroundCardQuantityEffect"
import { CardFunctionality } from "./interfaces/CardFunctionality"
import "../assets/NewCard.css"

export const AddNewCard: React.FC<CardFunctionality> = ({ updateDataFunction }) => {

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
    if (inputNameRefference.current?.value) inputNameRefference.current.value = ""
    if (inputDescriptionRefference.current?.value) inputDescriptionRefference.current.value = ""
    if (inputUrlRefference.current?.value) inputUrlRefference.current.value = ""
    updateDataFunction!(await affectEffect())
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