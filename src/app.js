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

io.on('connection', (socket) => {
    console.log("New client connected")
    socket.on('disconnect',()=>{
        console.log("User disconnected")
    })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
