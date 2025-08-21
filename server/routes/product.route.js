const router = require('express').Router()
const { store, index } = require('../controllers/product.controller')
const { verifyUser, isAdmin, isAdminUser } = require('../middleware/verify')
router.post('/', store)
router.get('/', index)

module.exports = router