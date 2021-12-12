const jwt = require('jsonwebtoken')

const authenticate = (req,res,next) => {
    try{
        
        const idToken = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(idToken, process.env.SECRET)
       
        req.user = decode
        next()
    }
    catch (error) {
        console.log(error)
        res.json({
            message: 'Authentication Failed'
        })
    }
    
}

module.exports = authenticate