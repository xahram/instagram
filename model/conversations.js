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
    timestamps: true
})

const Conversations = mongoose.model('conversations', conversationSchema)

module.exports = Conversations