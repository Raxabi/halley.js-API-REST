import { distroModel } from "../models/distribution.service.js"

/**
 * @type {import("halley.http").Route[]}
 */
export const routes = [{
    path: "/get",
    method: "GET",
    handler: async (req, res) => {
        try {
            const data = await distroModel.find({})
            res.json(data)
        } catch (error) {
            console.error(error)
        }
    }
}, {
    path: "/save",
    method: "POST",
    handler: async (req, res) => {
        await req.rawBodyParser()
        const bodyResult = JSON.parse(req.body)
        try {
            await distroModel.insertMany({
                name: bodyResult.name,
                description: bodyResult.description,
                url: bodyResult.url
            })
            res.status(200)
            .send("Datos guardados en la base de datos!")
        } catch (error) {
            res.status(400)
            .send("Formato incorrecto, talvez los datos no existen")
        }
    }
}, {
    path: "/delete",
    method: "POST",
    handler: async (req, res) => {
        await req.rawBodyParser()
        try {
            await distroModel.deleteOne({
                _id: req.body
            })
            res.status(200)
            .send("Datos eliminados")
        } catch (error) {
            res.status(400)
            .send("Formato incorrecto")
        }
    }
}]