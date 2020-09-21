const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
const port = 3001

//mongoo conexion
require('./connection/connectionDB')

//Routes
const experiencesRoutes = require('./routes/experiences')
const bookingRoutes = require('./routes/booking')

app.use('/experiences',experiencesRoutes)
app.use('/booking',bookingRoutes)

app.listen(port, () => {
    console.log(`Server  running ${port}`)
})