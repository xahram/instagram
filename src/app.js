const express = require('express');
const app = express();
const socketio = require('socket.io')

require('../db/mongoose')

const path = require('path')
const postsRouter = require('../routers/posts')
const UserRouter = require('../routers/users')
const Chat = require('../model/chats')
const Conversation = require('../model/conversations')





app.use(express.json())
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '../front/build')));
app.use(UserRouter)
app.use(postsRouter)



const server = require('http').createServer(app)
const io = socketio(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
})

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

let count = 0
// Connect when chat page is rendered which is 
// in componentdidmount the below io.on will be run
// Next you fetch the previously stored chats from db
// emit it where count is emitted and send it to client
//Next client sends a new message you get that in
//on event and you save tht to db where count++ 
//send it to the other user or both ones

// First make Chat page with all the necessary front end
io.on('connection', async (socket) => {
    console.log("New client connected")
    //After Auth

    socket.on('new_message', (data) => {
        const chat = new Chat({
            text: data.messageText,
            _id: new mongoose.Types.ObjectId()
        })
        const conversation = new Conversation({
            sender: data.senderId,
            receiver: data.receiverId,
            message: [].push(chat._id)
        })
        try {
            chat.save(function (err) {
                if (err) {
                    throw new Error(err);
                }
                else {
                    await conversation.save()
                }
            })
        } catch (error) {
            socket.emit('error', 'unable to send message')
        }
    })
    socket.emit('increment', count)
    socket.on('increment', () => {
        count++
        console.log(count)
        io.emit('increment', count)
    })
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})



server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
