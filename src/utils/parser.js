const product = require("../model/product");

const parseOrder = (order) => {
	if(order) {
		return {
			id: order._id,
			channel: order.channel,
			state: order.state,
			value: order.value,
			discount: order.discount,
			date: order.date,
			deliveryType: order.deliveryType,
			shippingType: order.shippingType
		}
	}
	return null;
}
const parseOrderUpdate = (order) => {
	if (!order) {
		return null
	}
	if(order.value == undefined) {
		return { id: order.id, state : order.state }
	}
	if(order.state === undefined ) {
		return { id: order.id, value : order.value }
	}
	return {
		id: order.id,
		value: order.value,
		state: order.state
	}
}

const parseProduct = (product) => {
	if(product) {
		return {
			id: product._id,
			sku: product.sku,
			name: product.name,
			quantity: product.quantity,
			price: product.price,
			barcode: product.barcode,
			idOrder: product.idOrder
		}
	}
	return null;
}

module.exports = { 
	parseOrder,
	parseOrderUpdate,
	parseProduct
}