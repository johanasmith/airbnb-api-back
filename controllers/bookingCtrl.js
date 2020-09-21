const { 
    saveReserva
} = require('./../bussines/bookingBussines')

const { request } = require('express')

const save = (req,res) => {
    const response = saveReserva(req.body)
    res.json(response)
}

module.exports = {
    save
}