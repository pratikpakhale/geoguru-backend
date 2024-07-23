const VideoService = require('../services/video')

const videoService = new VideoService()

exports.createVideo = async (req, res, next) => {
  try {
    const video = await videoService.createVideo(req.body, req.file.path)
    res.status(201).json(video)
  } catch (error) {
    next(error)
  }
}

exports.removeVideoFromPlaylist = async (req, res, next) => {
  try {
    const video = await videoService.removeVideoFromPlaylist(
      req.params.videoId,
      req.params.playlistId
    )
    res.status(200).json(video)
  } catch (error) {
    next(error)
  }
}
