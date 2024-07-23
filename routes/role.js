const router = require('express').Router()

const roleController = require('../controllers/role')
const authJwt = require('../middlewares/authJwt')

// route: /api/roles

router.get(
  '/',
  [authJwt.verifyToken, authJwt.isAdmin],
  roleController.getAllRoles
)
router.get(
  '/:roleId',
  [authJwt.verifyToken, authJwt.isAdmin],
  roleController.getRoleById
)

router.post(
  '/create',
  [authJwt.verifyToken, authJwt.isAdmin],
  roleController.createRole
)

router.put(
  '/:roleId',
  [authJwt.verifyToken, authJwt.isAdmin],
  roleController.updateRole
)

router.delete(
  '/:roleId',
  [authJwt.verifyToken, authJwt.isAdmin],
  roleController.deleteRole
)

module.exports = router
