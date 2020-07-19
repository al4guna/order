const express = require('express')
const route = require('./route')
const { errorMiddleware } = require('./middlewares/error.js')


const app = express();

app.use(express.json())

app.use('/api', route)

app.use(errorMiddleware);

module.exports = app