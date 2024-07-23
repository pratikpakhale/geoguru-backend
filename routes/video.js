const router = require('express').Router()

const videoController = require('../controllers/video')

const upload = require('../middlewares/upload')
// route: /api/videos

router.post('/', upload.video(), videoController.createVideo)
router.delete('/:videoId/:playlistId', videoController.removeVideoFromPlaylist)

module.exports = router
