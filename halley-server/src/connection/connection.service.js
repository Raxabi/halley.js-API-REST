import mongoose from "mongoose"

export async function mongoConnection(host, name) {
    await mongoose.connect(`mongodb://${host}${name}`)
    console.log("\nLa conexion a la base de datos fue exitosa\n")
}