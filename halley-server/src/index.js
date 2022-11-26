import { Halley } from "halley.http"
import env from "dotenv"

import { mongoConnection } from "./connection/connection.service.js"
import { getAll, addCard, updateCard, deleteCard } from "./controllers/halleyRest.controllers.js"

env.config()

try {
    await mongoConnection(process.env.DB_HOST, process.env.DB_NAME)
} catch (error) {
    console.error(error)
}

export const halley = new Halley({
    port: process.env.PORT || 5000,
    useNodeEnv: true
})

halley.get("/getAll", getAll)

halley.post("/save", addCard)

halley.post("/update", updateCard)

halley.post("/delete", deleteCard)

halley.ready(halley.port)