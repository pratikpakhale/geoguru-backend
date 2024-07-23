const Router = require('express').Router

const authController = require('../controllers/auth')
const router = new Router()

// route: /api/auth

router.post('/login', authController.login)
router.post('/signup', authController.signup)

module.exports = router
