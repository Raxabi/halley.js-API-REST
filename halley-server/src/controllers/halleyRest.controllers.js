import { distroModel } from "../models/distribution.service.js"

/**
 * * /getAll route controller
 * @type {import("halley.http").HalleyListener}
 */
export const getAll = async (req, res) => {
    const data = await distroModel.find()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.json(data)
}

/**
 * * /save route controller
 * @type {import("halley.http").HalleyListener}
 */
export const addCard = async (req, res) => {
    await req.rawBodyParser()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")

    const bodyResult = JSON.parse(req.body)

    await distroModel.insertMany({
        name: bodyResult.name,
        description: bodyResult.description,
        url: bodyResult.url
    })
    .then(() => {
        res.status(200)
        .send("Datos guardados en la base de datos!")
    })
    .catch(() => {
        res.status(400)
        .send("Formato incorrecto, talvez los datos no existen")
    })
}

/**
 * * /update route controller
 * @type {import("halley.http").HalleyListener}
 */
export const updateCard = (req, res) => {
    
}

/**
 * * /delete route controller
 * @type {import("halley.http").HalleyListener}
 */
export const deleteCard = async (req, res) => {
    await req.rawBodyParser()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")

    await distroModel.deleteOne({
        _id: req.body
    })
    .then(() => {
        res.send("Datos eliminadors")
    })
    .catch(() => {
        res.status(404)
        .send("Formato incorrecto")
    })
}