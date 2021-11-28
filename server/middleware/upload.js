
const multer = require('multer')

module.exports = multer(
    {
        storage : multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'upload/')
            },
            filename: function (req, file, cb) {
                // let ext = path.extname(file.originalname)
                cb(null, file.originalname);
            }
        })
    }
) 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage: storage })

// module.exports = upload