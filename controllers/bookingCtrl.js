const { 
    saveReserva
} = require('./../bussines/bookingBussines')

const { request } = require('express')

const save = async (req,res) => {
    try{
          const response = await saveReserva(req.body)
        res.json(response)
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    save
}