const { orderS } =  require('../../service')
const { success } = require('../../utils/responses')
const { parseOrden } = require('../../utils/parser')
const CError = require('../../utils/errors/customError')

const Save = async (dat, res, next) => {
	try {	
		const data = await orderS(dat)
		success(res, parseOrden(data))
	}catch(error) {
		next(new CError(...error.keyError, error))
	}	
}

module.exports = {
	Save
}