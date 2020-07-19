const config = require('dotenv').config().parsed

exports.MongoConnectionString = config.DB_MONGOCONNECTION