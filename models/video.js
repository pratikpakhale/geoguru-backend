const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
    },
    module: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Video', videoSchema)
