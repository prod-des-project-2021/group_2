const express = require('express')
const router = express.Router()
const courseController = require('../controller/course')




router.get('/courses', courseController.getAllCourses)

router.get('/courses/:courseId', courseController.getCourse)

router.put('/users/:userId/:courseId/enrolling' , courseController.enrolledCourses)

module.exports = router