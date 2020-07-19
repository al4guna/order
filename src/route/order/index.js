const router = require('express').Router()

router.get('/', (req, res) => {
	res.json({"name": "Angel Laguna"})
})

router.post('/', () => {
	res.json({"create": "Angel"})
})

module.exports = router