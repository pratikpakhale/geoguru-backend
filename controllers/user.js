const UserService = require('../services/user')

const userService = new UserService()

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getUserByUsername = async (req, res) => {
  try {
    const user = await userService.getUserByUsername(req.params.username)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(
      req.params.userId,
      req.body
    )
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
