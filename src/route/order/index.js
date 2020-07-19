const router = require('express').Router()
const { orderController } = require('../../controller/')

const createOrder = (req, res, next) => {
	orderController.Save(req.body, res, next)
}


router.get('/', (req, res) => {
	res.json({"name": "Angel Laguna"})
})

/* crear orden */
router.post('/', createOrder)

module.exports = router