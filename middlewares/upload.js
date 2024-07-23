const fs = require('fs')
const multer = require('multer')
const { v4 } = require('uuid')

const MAX_FILE_SIZE = 500 // 100MB

// save images to public/images and videos to public/videos and with original file extension

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, 'public/images')
    } else if (file.mimetype.includes('video')) {
      cb(null, 'public/videos')
    }
  },
  filename: (req, file, cb) => {
    const fileExtension = file.mimetype.split('/')[1]
    const uid = v4()
    const fileName = `${uid}.${fileExtension}`
    cb(null, fileName)
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes('image') || file.mimetype.includes('video')) {
    cb(null, true)
  } else {
    cb(new Error('File type not supported'), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE * 1024 * 1024,
  },
})

const normalizeFilePath = (req, res, next) => {
  req.file.path = req.file.path.replace(/\\/g, '/')
  next()
}

module.exports = {
  thumbnail: () => {
    if (!fs.existsSync('public/images')) {
      fs.mkdirSync('public/images', { recursive: true })
    }
    return [upload.single('thumbnail'), normalizeFilePath]
  },
  video: () => {
    if (!fs.existsSync('public/videos')) {
      fs.mkdirSync('public/videos', { recursive: true })
    }
    return [upload.single('video'), normalizeFilePath]
  },
}
