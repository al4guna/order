const { Order } = require('../../model')
const { errorList } = require('../../utils/errors/errorList.json')

const Save = (dat) => new Promise((resolve, reject) => {
	const model = new Order(dat)
	model.save()
		.then((nDat) => {
			resolve(nDat)
		})
		.catch((reason) => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})

const GetAll = () => new Promise((resolve, reject) => {
	Order.find()
		.then((dat) => {
			resolve(dat)
		})
		.catch((reason) => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})

const Update = (dat) => new Promise((resolve, reject) => {
	Order.findOneAndUpdate({_id: dat.id }, dat, {
		new: true,
		upsert: true
	})
		.then((data) => {
			resolve(data)
		})
		.catch(() => {
			reject({ statusCode: 500, message: reason.message, keyError: errorList.internalDB })
		})
})

exports.Save = Save
exports.GetAll = GetAll
exports.Update = Update