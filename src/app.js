const express = require('express');
const app = express();
const socketio = require('socket.io')

require('../db/mongoose')

const path = require('path')
const postsRouter = require('../routers/posts')
const UserRouter = require('../routers/users')




app.use(express.json())
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '../front/build')));
app.use(UserRouter)
app.use(postsRouter)



const server = require('http').createServer(app)
const io = socketio(server)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

let count = 0
io.on('connection', (socket) => {
    console.log("New client connected")

    socket.emit('increment', count)
    socket.on('increment', () => {
        count++
        console.log(count)
        socket.emit('increment', count)
    })
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})



server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
