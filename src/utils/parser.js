const parseOrder = (order) => {
	if(order) {
		return {
			id: order._id,
			chanel: order.chanel,
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

module.exports = { parseOrder }