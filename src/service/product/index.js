const { Product } = require('../../model')
const { Order } = require('../../model')
const { errorList } = require('../../utils/errors/errorList.json')

const Save =  (dat) => new Promise( (resolve, reject) => {
	Order.findById(dat.idOrder)
		.then((order) => {
			if(order === null ) {
				reject({ statusCode: 500, message: "Orden no encontrada.", keyError: errorList.internalDB })
			}
			const model = new Product(dat)
			return model.save()
		})
		.then((data) => {
			resolve(data)
		})
		.catch((reason) => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})


const GetAllByOrder = (id) => new Promise((resolve, reject) => {
	Product.find({idOrder: id})
		.then((data) => {
			resolve(data)
		})
		.catch((reason) => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
}) 

const DeleteProduct = (id) => new Promise((resolve, reject) => {
	Product.findByIdAndDelete(id)
		.then((data) => {
			resolve(data)
		})
		.catch((reason) => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})

exports.Save = Save
exports.GetAllByOrder = GetAllByOrder
exports.DeleteProduct = DeleteProduct