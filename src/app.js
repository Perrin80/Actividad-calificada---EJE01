const express   = require('express')
const path      = require('path')
const router    = require('./router')
const app       = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', router)

module.exports = app