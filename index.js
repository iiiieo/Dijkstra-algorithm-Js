const express = require('express')
const app = express()
require('http').Server(app).listen(8080)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
}).listen(process.env.PORT)