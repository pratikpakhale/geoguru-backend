const router = require('express').Router()
const userController = require('../controllers/user')

// route: /api/users

router.get('/', userController.getAllUsers)
router.get('/username/:username', userController.getUserByUsername)
router.get('/:userId', userController.getUserById)

router.post('/create', userController.createUser)

router.put('/:userId', userController.updateUser)

router.delete('/:userId', userController.deleteUser)

module.exports = router
