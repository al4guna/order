function success(res, data, code) {
	res.status(code || 200)
		.json({ data })
}

module.exports = { success }