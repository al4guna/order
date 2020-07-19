function succcess(res, data, code) {
	res.status(code || 200)
		.json({ data })
}