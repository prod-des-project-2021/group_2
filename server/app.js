require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const courseRoutes = require('./routes/course')
const imgRoutes = require('./routes/img.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(authRoutes)
app.use(courseRoutes)
app.use(imgRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log('database connected')
    app.listen(process.env.PORT || 3000)
  })
  .catch((err) => {
    console.log(err)
  })

let serverInstance = null
module.exports = {
  start: function () {
    serverInstance = app.listen(() => {
      console.log('App is listening ')
    })
  },
  close: function () {
    serverInstance.close()
  },
}
// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`)
// })
