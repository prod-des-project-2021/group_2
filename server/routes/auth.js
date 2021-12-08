const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')
const auth = require('../middleware/authenticate')

router.get('/', authController.opening)

router.get('/users', auth, authController.getAllUsers)

router.post('/register', authController.register)

router.post('/login', authController.login)

router.get('/users/:userId', auth, authController.getUser)

router.put('/users/update/:userId', authController.updateUser)

module.exports = router
