const express = require('express')
const router = express.Router()
const courseController = require('../controller/course')


router.post('/addcourse' , courseController.addCourse)

router.get('/courses' , courseController.getAllCourses)
module.exports = router