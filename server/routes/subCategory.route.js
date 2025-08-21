const router = require('express').Router()
const { store, index, subcat, update, single } = require('../controllers/sub.category')
const { verifyUser } = require('../middleware/verify')
router.post('/', store)
router.get('/', index)
router.get('/subcat/:cat_id', subcat)
router.put('/:id', update)
router.get('/:id', single)

module.exports = router