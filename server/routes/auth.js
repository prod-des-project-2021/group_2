const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')

router.get('/', authController.opening)

router.post('/register', authController.register)

router.post('/login', authController.login)

module.exports = router