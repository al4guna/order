const router = require('express').Router()
const { productController } = require('../../controller/')

const createProduct = (req, res, next) => {
	productController.Save(req.body, res, next)
}

const getProductByOrder = (req, res, next) => {
	productController.GetAllByOrder(req.params.id, res, next)
}

const deleteProduct = (req, res, next) => {
	productController.DeleteProduct(req.params.id, res, next)
}

/* crear producto */
router.post('/', createProduct)
/* obtener productos de una orden */
router.get('/:id', getProductByOrder)
/* eliminar producto */
router.delete('/:id', deleteProduct)

module.exports = router