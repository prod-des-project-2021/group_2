const Images = require('../models/img')

const addImage = (req, res, next) => {
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

module.exports = { addImage }
