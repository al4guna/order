const http = require('http')
const mongoose = require('mongoose')
const app = require('../app') 
const { MongoConnectionString } = require('../utils/strings')

const PORT_APP = process.env.PORT || 5000

function onListening() {
	console.log(`server listening in ${PORT_APP} `)
}

const server = http.createServer(app)

// connection db
mongoose.connect(MongoConnectionString,{
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	server.listen(PORT_APP)
	server.on('listening', onListening)
}).catch((error) => {
	console.log('Could not connect to the database.', error)
	process.exit()
})