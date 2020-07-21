const mongoose =  require('mongoose')
const { Schema , model } = mongoose

const productSchema = Schema({
	sku: { type: String, required: true },
	name: { type: String, required: true },
	quantity: { type: Number, required: true },
	price: { type: Number, required: true },
	barcode: { type: String, required: true },
	idOrder: {
		type: Schema.Types.ObjectId,
    	ref: 'Order',
	}
})

module.exports = model('Product', productSchema)