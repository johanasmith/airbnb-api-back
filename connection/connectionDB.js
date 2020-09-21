const mongoose = require('mongoose')

const url = 'mongodb+srv://db_cloneairbnb:admin@cluster0.uzxhy.mongodb.net/db_cloneairbnb?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})

const db= mongoose.connection
db.on('error', () => console.error('Error con la conexion a la base de datos'))
db.once('open', () => console.log('Conexion exitosa'))

module.exports = db