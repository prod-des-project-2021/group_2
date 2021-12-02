const express = require('express')
const router = express.Router()
const imgController = require('../controller/img')
const upload = require('../middleware/upload')

router.get('/images', imgController.getImages)

router.post('/images/addImage',upload.single('image_link') , imgController.addImage)

module.exports = router