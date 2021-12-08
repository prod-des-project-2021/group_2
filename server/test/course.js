const chai = require('chai')
const expect = require('chai').expect
chai.use(require('chai-http'))
const app = require('../app')
const PORT = process.env.PORT || 3000
const apiAddress = `http://localhost:${PORT}/`

describe('Testing courses api routes', () => {
  before(function () {
    // start the server
    app.start()
  })

  after(function () {
    // close the server
    app.close()
  })

  describe('Testing get all courses', () => {
    it('Should return a successfully response', () => {
      chai
        .request(apiAddress)
        .get('/courses')
        .then((res) => {
          expect(res).to.have.status(200)
        })
        .catch((error) => {
          throw error
        })
    }),
      it('Should return a successfully response, a single course', () => {
        chai
          .request(apiAddress)
          .get('/courses/courseId')
          .then((res) => {
            expect(res).to.have.status(200)
          })
          .catch((error) => {
            throw error
          })
      })
  })
})
