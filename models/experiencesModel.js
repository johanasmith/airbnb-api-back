const mongoose = require('mongoose')
const { Schema } = mongoose

const ExperienceSchema = new Schema({
        imagen: String,
        titulo: String,
        descripcion: String,
        lugar: String,
        puntaje: Number,
        usuarios: Number
})

const ExperienceModel = mongoose.model('experiences', ExperienceSchema)

module.exports = ExperienceModel