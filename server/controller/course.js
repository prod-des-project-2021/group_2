const Course = require('../models/course')

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
        message: 'Product added successfully',
      })
    })
    .catch((err) => {
      console.log(err)
      res.json({
        message: 'Product add failed',
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

module.exports = { addCourse, getAllCourses }
