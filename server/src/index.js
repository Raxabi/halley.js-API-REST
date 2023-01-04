import { Halley } from "halley.http"
import { cors } from "@tinyhttp/cors"
import env from "dotenv"

import { mongoConnection } from "./connection/connection.service.js"
import { routes } from "./controllers/halleyRest.controllers.js"

env.config()

try {
    mongoConnection(process.env.DB_HOST, process.env.DB_NAME)
} catch (error) {
    console.error(error)
}

export const halley = new Halley({
    port: process.env.PORT || 5000,
    useNodeEnv: true
})

halley.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
}))

halley.use(routes)

halley.ready(halley.port)