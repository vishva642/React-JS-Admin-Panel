const router = require('express').Router()
const { store, index, trash, getSingleData, editSingleData } = require('../controllers/category.controller')
// const { verifyUser } = require('../middleware/verify')
router.post('/', store)
router.get('/', index)
router.delete('/:id', trash)
router.get('/:id', getSingleData)
router.put('/:id', editSingleData)

module.exports = router