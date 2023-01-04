import { Fragment, useState, useEffect } from "react"
import CardsContainer from "./components/CardsContainer"
import AddNewCard from "./components/AddNewCard"
import NavBar from "./components/NavBar"
import "./assets/App.css"

import { CardProps } from "./interfaces/Card"
import { getCards } from "./api/endPoints.frontend"

const Main = () => {
  
  const [cards, setCard] = useState<CardProps[]>()

  useEffect(() => {
    getCards("http://localhost:5000/get")
    .then(data => setCard(data))
  }, [])

  return (
    <Fragment>
      <NavBar />
      <div id="main-components-container">
        <div id="add-card">
          <AddNewCard setCard={setCard} />
        </div>
        <div id="card-container">
          <CardsContainer cards={cards} setCard={setCard} />
        </div>
      </div>
    </Fragment>
  )
}

export default Main