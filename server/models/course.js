const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teachers: {
        type: Number,
        required: true
    },
    favorite: {
        type: Boolean,
        required: false
    },
    enrollment_code: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Course', courseSchema);