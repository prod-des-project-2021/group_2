const express = require('express')
const router = express.Router()
const imgController = require('../controller/img')

router.post('/addImage', imgController.addImage)

module.exports = router