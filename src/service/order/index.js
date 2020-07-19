const { Order } = require('../../model')
const { errorList } = require('../../utils/errors/errorList.json')

const Save = (dat) => Promise((resolve, reject) => {
	const model = new Order(dat)
	model.save()
		.then((nDat) => {
			resolve(nDat)
		})
		.catch((reason) => {
			reject({ satatusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})

exports.Save = Save