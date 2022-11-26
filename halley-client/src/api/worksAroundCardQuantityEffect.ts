import { getAll } from "../api/endPoints.frontend"

export const affectEffect = (): Promise<any> => (
    getAll("http://localhost:5000/getAll")
    .then(async data => (
        await data.json()
    ))
)