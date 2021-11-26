const Images = require('../models/img')
const cloudinary = require('../middleware/cloudinary')
const { v4: uuidv4 } = require('uuid')

const addImage = async (req, res, next) => {
  const uploadedImage = await cloudinary.uploader.upload(
    req.file.path,
    { public_id: `testing/${uuidv4()}`, tags: `testing` },
    function (err, image) {
      if (err) return res.send(err)
      console.log(image)
      console.log('Uploaded Cloudinary successfully')
    },
  )

  let image = new Images({
    alt: req.body.alt,
    image_link: req.body.image_link,
    title: req.body.title,
    news: req.body.news,
    link: req.body.link,
  })
  image
    .save()
    .then((result) => {
      res.json({
        message: 'Image added successfully',
      })
    })
    .catch((err) => {
      res.json({
        message: 'Image add failed',
      })
    })
}

const getImages = (req, res, next) => {
  Images.find()
    .then((image) => {
      res.json({
        image,
      })
    })
    .catch((error) => {
      res.json({
        message: 'An error occurred!',
      })
    })
}

module.exports = { addImage, getImages }
