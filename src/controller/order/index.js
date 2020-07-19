const { orderS } =  require('../../service')
const { success } = require('../../utils/responses')
const { parseOrder } = require('../../utils/parser')
const CError = require('../../utils/errors/customError')

const Save = async (dat, res, next) => {
	try {	
		const data = await orderS.Save(dat)
		success(res, parseOrder(data))
	}catch(error) {
		console.log(error)
		next(new CError(...error.keyError, error))
	}	
}

const GetAll = async (res, next) => {
	try {
		const data =  await orderS.GetAll()
		success(res, data.map((c) => parseOrder(c)))
	}catch(error){
		console.log(error)
		next(new Error(...error.keyError, error))
	}
}

module.exports = {
	Save,
	GetAll
}