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

const enrolledCourses = async (req, res, next) => {
  userId = req.params.userId
  courseId = req.params.courseId

  const userIsValid = await User.findById(userId)
  const courseIsValid = await Course.findById(courseId)

  if (!userIsValid) res.status(401)
  if (!courseIsValid) res.json({ msg: 'Course not existed' })

  const courseToAdd = await Course.findById(courseIsValid)

  const courseUser = await User.findById(userIsValid)

  const userCourses = courseUser.courses

  var courseAlreadyEnroller = false

  userCourses.map((element) => {
    if (element.name === courseIsValid.name) courseAlreadyEnroller = true
  })

  if (courseAlreadyEnroller) res.json({ mes: 'Course already enrolled' })
  else {
    const result = await User.updateOne(
      { _id: userIsValid },
      { $push: { courses: courseToAdd } },
    )
    res.json({ mes: 'Added successfully' })
  }
}

module.exports = { addCourse, getAllCourses, getCourse, enrolledCourses }
