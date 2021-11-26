const Course = require('../models/course')
const User = require('../models/users')


const addCourse = (req, res, next) => {
  let course = new Course({
    name: req.body.name,
    teachers: req.body.teachers,
    favorite: req.body.favorite,
    enrollment_code: req.body.enrollment_code,
  })

  course
    .save()
    .then((result) => {
      res.json({
        message: 'Course added successfully',
      })
    })
    .catch((err) => {
      console.log(err)
      res.json({
        message: 'Course add failed',
      })
    })
}

const getAllCourses = (req, res, next) => {
  Course.find()
    .then((course) => {
      res.json({
        course,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const getCourse = (req, res, next) => {
  courseId = req.params.courseId
  Course.findById(courseId)
    .then((result) => {
      res.json({
        result,
      })
    })
    .catch((error) => {
      console.log(error)
      res.json({
        message: 'Something wrong happened',
      })
    })
}

const enrolledCourses = (req, res, next) => {
  userId = req.params.userId
  courseId = "619cfedaf5a04b2cd4a33a0a"
  let addedData = Course.findById(courseId)
  console.log(userId)
  console.log(req.params.courseId)
  User.findByIdAndUpdate(userId, { $push: addedData })
    .then((result) => {
      res.json({
        message: 'Course added successfully',
      })
    })
    .catch((error) => {
      console.log(error)
      res.json({
        message: 'Something wrong happened',
      })
    })
}

module.exports = { addCourse, getAllCourses, getCourse, enrolledCourses }
