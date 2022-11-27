import { getData } from "./endPoints.frontend"

export const affectEffect = () => (
    getData("http://localhost:5000/getAll")
    .then(async data => (
        await data.json()
    ))
)