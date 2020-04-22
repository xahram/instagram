const User = require('../model/users')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, 'instagramclone')
        const user = await User.findOne({ _id: decoded._id })
        if (!user) {
            return res.status(404).send('Unable To find User')
        }
        req.token = token
    } catch (error) {
        res.status(500).send('Unable To Login')
    }
}