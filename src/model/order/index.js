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
			sky: String, 
			nombre: String, 
			cantiad: Number,
			precio: Number, 
			codigoBarra: String
		}],
		default: []
	}
})

module.exports = model('Order', orderSchema)