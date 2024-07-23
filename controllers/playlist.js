const PlaylistService = require('../services/playlist')

const playlistService = new PlaylistService()

exports.createPlaylist = async (req, res, next) => {
  try {
    const playlist = await playlistService.createPlaylist(
      req.body,
      req.file.path
    )
    res.status(201).json(playlist)
  } catch (error) {
    next(error)
  }
}

exports.getPlaylistById = async (req, res, next) => {
  try {
    const playlist = await playlistService.getPlaylistById(req.params.id)
    res.status(200).json(playlist)
  } catch (error) {
    next(error)
  }
}

exports.updatePlaylist = async (req, res, next) => {
  try {
    const playlist = await playlistService.updatePlaylist(
      req.params.id,
      req.body,
      req.file.path
    )
    res.status(200).json(playlist)
  } catch (error) {
    next(error)
  }
}

exports.deletePlaylist = async (req, res, next) => {
  try {
    const playlist = await playlistService.deletePlaylist(req.params.id)
    res.status(200).json(playlist)
  } catch (error) {
    next(error)
  }
}

exports.getAllPlaylists = async (req, res, next) => {
  try {
    const playlists = await playlistService.getAllPlaylists()
    res.status(200).json(playlists)
  } catch (error) {
    next(error)
  }
}
