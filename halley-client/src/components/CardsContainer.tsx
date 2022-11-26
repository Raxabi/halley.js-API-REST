import { useState } from "react"
import { expectedObjectAPI } from "./interfaces/IncomingData"
import { CardFunctionality } from "./interfaces/CardContainer"
import Card from "./Card"

const CardsContainer: React.FC<CardFunctionality> = ({ data, updateData }) => {
  return (
    <div id="container">
      {data!.map((item: expectedObjectAPI): JSX.Element => (
        <Card key={item._id} updateData={updateData} _id={item._id} name={item.name}/>
      ))}
    </div>
  )
}

export default CardsContainer