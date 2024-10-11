const User = require('../models/user')
const Role = require('../models/role')

class UserService {
  async createUser(userData) {
    // this.validateUser(userData)

    const existingUser = await User.findOne({ username: userData.username })

    if (existingUser) {
      throw new Error('User already exists')
    }

    const { roles, ...otherUserFields } = userData
    const newUser = new User(otherUserFields)
    if (roles && roles.length > 0) {
      const existingRoles = await Role.find({ name: { $in: roles } })
      newUser.role = existingRoles.map(role => role._id)
    }

    await newUser.save()

    return {
      ...newUser._doc,
      password: undefined,
    }
  }

  async getUserById(userId) {
    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    return {
      ...user._doc,
      password: undefined,
    }
  }

  async updateUser(userId, userData) {
    // this.validateUser(userData)
    const updatedUserData = {
      ...userData,
    }
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    })
    if (!updatedUser) {
      throw new Error('User not found')
    }
    return {
      ...updatedUser._doc,
      password: undefined,
    }
  }

  async deleteUser(userId) {
    await User.findByIdAndDelete(userId)
  }

  async getUserByUsername(username) {
    const user = await User.findOne({ username })

    if (!user) {
      throw new Error('User not found')
    }

    return {
      ...user._doc,
      password: undefined,
    }
  }

  async getAllUsers() {
    const users = await User.find()
    return users
  }
}

module.exports = UserService
