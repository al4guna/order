const mongoose =  require('mongoose')
const { Schema , model } = mongoose

const orderSchema = Schema({
	channel: {
		type: String,
		required: true
	}, 
	state: {  
		type: String,
		enum: ['Reservada', 'Pendiente', 'En tránsito', 'Lista para recoger', 'Cerrada', 'Cancelada'],
		required: true
	},
	value: { 
		type: Number,
		required: true
	},
	discount: { 
		type: Number,
		required: true
	},
	date:  { 
		type: String 
	},
	deliveryType: { 
		type: String,
		enum: ['Estandar', 'Express'],
		required: true
	},
	shippingType: {
		type: String,
		enum: ['Entrega en tienda', 'Entrega en domicilio'],
		required: true
	},
	items: {
		type: [{
			sky: { type: String, unique: true, dropDups: true , required: true }, 
			name: { type: String, required: true }, 
			quantity: { type: Number, required: true },
			price: { type: Number, required: true }, 
			barcode: { type: String, required: true }
		}],
		default: []
	}
})

module.exports = model('Order', orderSchema)