const { productS } =  require('../../service')
const { success } = require('../../utils/responses')
const { parseProduct } = require('../../utils/parser')
const CError = require('../../utils/errors/customError')

const Save = async (dat, res, next) => {
	try {	
		const data = await productS.Save(dat)
		success(res, parseProduct(data))
	}catch(error) {
		next(new CError(...error.keyError, error))
	}	
}

const GetAllByOrder = async (dat, res, next) => {
	try {
		const data =  await productS.GetAllByOrder(dat)
		success(res, data.map((c) => parseProduct(c)))
	}catch(error){
		next(new Error(...error.keyError, error))
	}
}

const DeleteProduct = async (dat, res, next) => {
	try {
		const data = await productS.DeleteProduct(dat)
		success(res, parseProduct(data))
	}catch(error) {
		next(new Error(...error.keyError, error))
	}
}

module.exports = {
	Save,
	GetAllByOrder,
	DeleteProduct
}