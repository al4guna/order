const express = require('express')
const route = require('./route')
const cors = require('cors')
const { errorMiddleware } = require('./middlewares/error.js')


const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', route)

app.use(errorMiddleware);

module.exports = app