const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

const opening = (req, res, next) => {
  res.send('Welcome to Course api')
}
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        error: err,
      })
    }

    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
          })
          user
            .save()
            .then((user) => {
              res.json({
                message: 'User added successfully',
              })
            })
            .catch((error) => {
              res.json({
                message: 'Something wrong',
              })
            })
        } else {
          res.json({
            message: 'Email existed',
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
const login = (req, res, next) => {
  var email = req.body.email
  var password = req.body.password

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({
            error: err,
          })
        } else if (result) {
          let returnSecureToken = jwt.sign(
            { name: user.name },
            process.env.SECRET,
            { expiresIn: '30min' },
          )
          res.json({
            message: 'Login Successful',
            name: user.name,
            email: user.email,
            returnSecureToken,
          })
        } else {
          res.json({
            message: 'Password does not match',
          })
        }
      })
    } else {
        res.json({
            message: 'Something wrong'
        })
    }
  })
}

module.exports = { opening, register, login }
