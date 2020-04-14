const express = require('express');
const app = express();
require('../db/mongoose')

const path = require('path')
const postsRouter = require('../routers/posts')
const UserRouter = require('../routers/users')




app.use(express.json())
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '../front/build')));
app.use(UserRouter)
app.use(postsRouter)





app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

app.listen(port, () => { console.log(`Listening on port ${port}`)
})
