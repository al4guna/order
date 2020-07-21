const router = require('express').Router()
const order = require('./order')
const product = require('./product')

router.use('/ordenes', order)
router.use('/productos', product)

module.exports = router