const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    text: {
        type: String
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat