const router = require('express').Router()
const { orderController } = require('../../controller/')

const createOrder = (req, res, next) => {
	orderController.Save(req.body, res, next)
}

const getOrders = (req, res, next) => {
	orderController.GetAll(res, next)
}

const updateOrder = (req, res, next) => {
	orderController.Update(req.body, res, next)
}

/* crear orden */
router.post('/', createOrder)
/* obtener todas las ordenes */
router.get('/', getOrders)
/* actualizando orden */
router.put('/', updateOrder)

module.exports = router