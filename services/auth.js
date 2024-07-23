const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const env = require('../config/env')
const User = require('../models/user')
const UserService = require('./user')

const userService = new UserService()
class AuthService {
  async verifyPassword(password, userPassword) {
    return await bcrypt.compare(password, userPassword)
  }

  async login(username, password) {
    const user = await User.findOne({ username })
    if (!user) {
      throw new Error('Invalid username or password.')
    }

    const isPasswordValid = await this.verifyPassword(password, user.password)
    if (!isPasswordValid) {
      throw new Error('Invalid username or password.')
    }

    const token = jwt.sign({ userId: user._id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRY,
    })
    return token
  }

  async signup(userData) {
    const user = await userService.createUser(userData)

    if (!user) {
      throw new Error('User not created')
    }
    return {
      user,
      message: 'User created successfully',
    }
  }
}

module.exports = AuthService
