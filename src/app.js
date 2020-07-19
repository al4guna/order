const express = require('express')

const app = express();

app.use('/', (req, res) => {
	res.send('Iniciando')
})
module.exports = app