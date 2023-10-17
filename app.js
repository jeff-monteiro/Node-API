const express = require("express");

const app = express()

const users = require('./controllers/users')

app.use('/', users)

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})