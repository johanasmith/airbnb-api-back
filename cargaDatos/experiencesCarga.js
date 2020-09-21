require('./../connection/connectionDB')
const ExperienceModel = require('./../models/experiencesModel')
const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository')

const cargaDatosExperiences = () => {

    EXPERIENCES_REPOSITORY.map(async el => {
        try {
            await ExperienceModel(el).save()
            console.log('carga Datos', el)
        } catch (err) {
            console.err('Error:', err)
        }
    })
}

cargaDatosExperiences()