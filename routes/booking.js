const router = require('express').Router()
const {save } = require('./../controllers/bookingCtrl')

router.post('/save', save)

module.exports = router