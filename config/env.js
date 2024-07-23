require('dotenv').config()

const { PORT, MONGODB_URI, JWT_SECRET, JWT_EXPIRY } = process.env

const config = {
  PORT: PORT || 3000,
  MONGODB_URI,
  JWT_SECRET,
  JWT_EXPIRY,
}

module.exports = config
