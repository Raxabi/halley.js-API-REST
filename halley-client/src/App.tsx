import { Fragment, useState, useEffect } from "react"
import CardsContainer from "./components/CardsContainer"
import AddNewCard from "./components/AddNewCard"
import NavBar from "./components/NavBar"
import { affectEffect } from "./api/worksAroundCardQuantityEffect"

const Main = () => {
  
  const [data, setData] = useState([])

  const fetchData = async () => setData(await affectEffect())

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Fragment>
      <NavBar />
      <CardsContainer data={data} updateData={setData} />
      <AddNewCard updateData={setData} />
    </Fragment>
  )
}

export default Main
