import React, { FormEvent, useState, createRef } from "react"
import { saveData } from "../api/endPoints.frontend"
import { affectEffect } from "../api/worksAroundCardQuantityEffect"
import { CardFunctionality } from "./interfaces/CardContainer"
import "../assets/NewCard.css"

export const AddNewCard: React.FC<CardFunctionality> = ({ updateData }) => {

  const [value, setValue] = useState("")

  const inputRefference = createRef<HTMLInputElement>()

  const saveFormData = async (e: FormEvent) => {
    e.preventDefault();
    saveData("http://localhost:5000/save", value)
    updateData!(await affectEffect())
    if (inputRefference.current?.value) inputRefference.current.value = ""
  }

  return (
    <div>
        <form onSubmit={saveFormData} method="post">
          <label htmlFor="name">Nombre de la distribucion</label><br/>
          <input
            type="text"
            ref={inputRefference}
            onChange={e => setValue(e.target.value)}
          /><br/>
          <button id="save-button" type="submit">Guardar distribucion</button>
        </form>
    </div>
  )
}

export default AddNewCard