const {
    findAllExperiences,
    findTop5Experiences,
    findExperience
} = require('./../bussines/experiencesBussines')

const { request } = require('express')

const all = async (req, res) => {
    try {
        const response = await findAllExperiences()
        res.json(response)
    } catch (error) {
       res.status(500).send(error)
    }
}

const top5 = async (req, res) => {
    const response = await findTop5Experiences()
    res.json(response)
}

const detail = async (req, res) => {
    const { id } = req.params
    try {
        const response = await findExperience(id)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.msg)
    }
}

module.exports = {
    all,
    top5,
    detail
}