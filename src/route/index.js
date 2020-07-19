const router = require('express').Router()
const order = require('./order')

router.use('/ordenes', order)

module.exports = router