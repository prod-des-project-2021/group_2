const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema(
  {
    alt: {
      type: String,
      required: true,
    },
    image_link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    news: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Images', imageSchema)
