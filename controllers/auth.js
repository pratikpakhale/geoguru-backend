const AuthService = require('../services/auth')

const authService = new AuthService()

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body.username, req.body.password)
    res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
}

exports.signup = async (req, res, next) => {
  try {
    const { user, message } = await authService.signup(req.body)
    res.status(201).json({ user, message })
  } catch (error) {
    next(error)
  }
}
