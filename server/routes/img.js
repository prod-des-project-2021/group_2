const express = require('express')
const router = express.Router()
const imgController = require('../controller/img')
const upload = require('../middleware/upload')

router.get('/images', imgController.getImages)

router.post('/addImage', upload.single('images') , imgController.addImage)

module.exports = router