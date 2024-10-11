const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['student', 'moderator', 'teacher'],
      default: 'student',
    },
  },
  {
    timestamps: true,
  }
)

const Role = mongoose.model('Role', roleSchema)

module.exports = Role
