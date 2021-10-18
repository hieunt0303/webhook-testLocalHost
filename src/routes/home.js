const express = require('express')
const router = express.Router()
const homeControllers = require('../app/controllers/homeControllers')

router.post('/api/webhook-event-handler', homeControllers.webhook)

router.get('/', homeControllers.home)

module.exports = router