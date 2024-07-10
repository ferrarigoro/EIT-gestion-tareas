const express = require('express')
const app = express()

const api_routes = require('./routes/index.routes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Obtención de prueba correcta')
})

app.use('/api', api_routes)

module.exports = app