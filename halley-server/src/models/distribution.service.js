import mongoose from "mongoose"

const distroSchm = new mongoose.Schema({
    name: {
        type: String,
        required: true
    } 
}, {
    timestamps: true,
    timeseries: true
})

export const distroModel = mongoose.model("distro", distroSchm)