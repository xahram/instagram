const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    avatar: {
        type: Buffer
    },
    bio: {
        type: String,
        default: "Add You Description",
        maxlength: 130
    },
    tokens: [{
        token: {
            type: String
        }
    }]
    // uploads: [{ type: Schema.Types.ObjectId, ref: 'posts' }]

})

userSchema.virtual('posts', {
    ref: "posts",
    localField: '_id',
    foreignField: 'uploader'
})
userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, 'instagramclone')
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}
const User = mongoose.model('user', userSchema)

module.exports = User