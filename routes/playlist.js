const router = require('express').Router()

const upload = require('../middlewares/upload')

const playlistController = require('../controllers/playlist')

// route: /api/playlists

router.post('/', upload.thumbnail(), playlistController.createPlaylist)
router.get('/:id', playlistController.getPlaylistById)
router.put('/:id', upload.thumbnail(), playlistController.updatePlaylist)
router.delete('/:id', playlistController.deletePlaylist)
router.get('/', playlistController.getAllPlaylists)

module.exports = router
