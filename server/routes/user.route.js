const router = require('express').Router();
const { signup, login, logout, changePassword, sendOtp, forgotPassword } = require('../controllers/user.controller');
const { verifyUser } = require('../middleware/verify');

router.post('/signup', signup);
router.post('/login',login)
router.get('/logout', verifyUser, logout)
router.post('/changePassword', verifyUser, changePassword)
router.post('/sendOtp', sendOtp)
router.post('/forgotPassword', forgotPassword)
module.exports = router
