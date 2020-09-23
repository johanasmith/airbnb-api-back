const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
        idLugar:String,
        nombres: String,     
        celularContacto: Number,
        correoContacto: String,
        fechareserva: Date
})

const BookingModel = mongoose.model('booking', BookingSchema)

module.exports = BookingModel