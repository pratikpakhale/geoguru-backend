const RoleService = require('../services/role')

const roleService = new RoleService()

exports.createRole = async (req, res) => {
  try {
    const newRole = await roleService.createRole(req.body)
    res.status(201).json(newRole)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(req.params.roleId)
    res.json(role)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateRole = async (req, res) => {
  try {
    const updatedRole = await roleService.updateRole(
      req.params.roleId,
      req.body
    )
    res.json(updatedRole)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteRole = async (req, res) => {
  try {
    await roleService.deleteRole(req.params.roleId)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles()
    res.json(roles)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
