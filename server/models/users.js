const mongoose = require('mongoose')
const Course = require('./course')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses: [Object],
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', userSchema)
