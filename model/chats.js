const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    text: {
        type: String
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'conversations'
    }
})

const Chats = mongoose.model('chats', chatSchema)
module.exports = Chats