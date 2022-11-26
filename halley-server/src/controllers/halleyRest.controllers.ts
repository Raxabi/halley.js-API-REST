import { HalleyListener } from "halley.http"
import { distroModel } from "../models/distribution.service.js"

/**
 * * /getAll route controller
 */
export const getAll: HalleyListener = async (req, res) => {
    const data = await distroModel.find({})
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.json(data)
}

/**
 * * /save route controller
 */
export const addCard: HalleyListener = async (req, res) => {
    await req.formAsObjectParser()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")

    req.body.forEach(async item => {
        await distroModel.insertMany({
            name: Object.keys(item)[0]
        })
        .then(_ => {
            res.send("Datos guardados en la base de datos")
        })
        .catch(_ => {
            res.status(400)
            .send("Formato incorrecto")
        })
    })
}

/**
 * * /update route controller
 */

export const updateCard: HalleyListener = (req, res) => {
    
}

/**
 * * /delete route controller
 */

export const deleteCard: HalleyListener = async (req, res) => {
    await req.formAsObjectParser()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    req.body.forEach(async item => {
        await distroModel.deleteOne({
            _id: Object.keys(item)[0]
        })
        .then(() => {
            res.send("Datos eliminadors")
        })
        .catch(() => {
            res.status(404)
            .send("Formato incorrecto")
        })
    })
}