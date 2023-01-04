import { ComponentThatUseCards } from "../interfaces/CardFunctionality"
import Card from "./Card"
import "../assets/CardContainer.css"

const CardsContainer: React.FC<ComponentThatUseCards> = ({ cards, setCard }) => {
  return (
    <div style={cards?.length === 0 ? {columnGap: 0} : {columnGap: "1rem"}} id="card-container">
      {
        cards?.length === 0 ? <Card _id="0" name={"No existen tarjetas por ahora!"} useButtons={false}/>
        : cards?.map(cardFragment => (
          <Card
            key={cardFragment._id}
            _id={cardFragment._id}
            name={cardFragment.name}
            description={cardFragment.description}
            url={cardFragment.url}
            useButtons={true}
            setCard={setCard}
          />
        ))
      }
  </div>
  )
}

export default CardsContainer