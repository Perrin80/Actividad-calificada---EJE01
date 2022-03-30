const express = require('express')
const controller = require('./controllers/controller')

const router = express.Router()

// Controllers
const Controller = new controller()

// Routes
router.get('/', Controller.renderHome)

router.get('*', Controller.renderNotFound)

module.exports = router