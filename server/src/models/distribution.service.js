import mongoose from "mongoose"

const distroSchm = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    }
}, {
    timestamps: true,
    timeseries: true
})

export const distroModel = mongoose.model("distro", distroSchm)