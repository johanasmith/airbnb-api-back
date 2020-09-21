const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 3001

app.get('/', (req,res) =>{

    res.send('Hola mi api express')
})

app.get('/saludar', (req,res) =>{
    const { nombre,edad = 0 } = req.query
    res.send(`Saludos ${nombre} tienes ${edad} años`)
})

app.put('/',(req,res) =>{
    res.send('Put request')
})

app.delete('/',(req,res) =>{
    res.send('Delete request')
})

app.post('/',(req,res) =>{
    const {numero1,numero2, persona} = req.body
    const {nombre, edad} = persona
    res.send(`numero1: ${numero1}, numero2: ${numero2}, Persona: ${nombre}`)
})

app.listen(port, () => {
    console.log(`Server  running ${port}`)
})