const { 
    findAllExperiences,
    findTop5Experiences,
    findExperience
} = require('./../bussines/experiencesBussines')

const { request } = require('express')

const all = (req,res) =>{
    const response = findAllExperiences()
    res.json(response)
}

const top5 = (req,res) => {
    const response = findTop5Experiences()
    res.json(response)
}

const detail = (req,res) => {
    const {id} = req.params
    try{
        const response = findExperience (id)
        res.json(response)
    }catch (error){
        res.status(404).send(error)
    }
}

module.exports = {
    all,
    top5,
    detail
}