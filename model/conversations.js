const mongoose = require('mongoose')

const Schema = mongoose.Schema
const conversationSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]
})

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation