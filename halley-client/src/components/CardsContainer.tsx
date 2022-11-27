import { CardFunctionality } from "./interfaces/CardFunctionality"
import Card from "./Card"
import "../assets/CardContainer.css"

const CardsContainer: React.FC<CardFunctionality> = ({ data, updateDataFunction }) => {
  return (
    <div id="card-container">
      {
        data!.length === 0 ? <Card _id="0" name={"No existen tarjetas por ahora!"} useButtons={false}/>
        : data!.map(cardFragment => (
          <Card
            key={cardFragment._id}
            _id={cardFragment._id}
            name={cardFragment.name}
            description={cardFragment.description}
            url={cardFragment.url}
            useButtons={true}
            updateDataFunction={updateDataFunction}
          />
        ))
      }
  </div>
  )
}

export default CardsContainer