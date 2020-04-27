const User = require('../model/users')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ","")
        console.log(token)
        const decoded = jwt.verify(token, 'instagramclone')
        const user = await User.findOne({ _id: decoded._id })
        if (!user) {
            return res.status(404).send('COuldn\'t perform operation. ')
        }
        req.token = token
        next()
    } catch (error) {
        res.status(500).send('Unable To Verify')
    }
}
module.exports =  authMiddleware