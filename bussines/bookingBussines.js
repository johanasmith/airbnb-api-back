const BookingModel = require('../models/bookingModel')

const saveReserva = async (reserva) => {
    try{
        await BookingModel.create(reserva)
        return ('Su reserva se guardo exitosamente')
    }catch(error){
        throw error
    }
}

module.exports = {
    saveReserva
}