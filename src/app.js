const express = require('express');
const app = express();
const io = require('socket.io')

require('../db/mongoose')

const path = require('path')
const postsRouter = require('../routers/posts')
const UserRouter = require('../routers/users')




app.use(express.json())
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '../front/build')));
app.use(UserRouter)
app.use(postsRouter)



const server = require('http').Server(app)
const socket = io(server)

socket.on('connection',(socket)=>{
    console.log("Socket ", socket)
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
