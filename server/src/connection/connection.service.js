import mongoose from "mongoose"

export function mongoConnection(host, name) {
    mongoose.set("strictQuery", false)
    mongoose.connect(`mongodb://${host}${name}`)
    .then(() => console.log("\nLa conexion a la base de datos fue exitosa\n"))
}