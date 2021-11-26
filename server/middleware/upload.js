const path = require('path')
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