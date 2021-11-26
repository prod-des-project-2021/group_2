const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')

router.get('/', authController.opening)

router.get('/users', authController.getAllUsers)

router.post('/register', authController.register)

router.post('/login', authController.login)

router.get('/users/:userId', authController.getUser)

router.put('/users/update/:userId', authController.updateUser)

module.exports = router