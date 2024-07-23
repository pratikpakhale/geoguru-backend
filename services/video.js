const fs = require('fs')
const Video = require('../models/video')
const Playlist = require('../models/playlist')
const { model } = require('mongoose')

class VideoService {
  async createVideo(videoData, uri) {
    const video = new Video({
      ...videoData,
      data: JSON.parse(videoData.data),
      uri,
    })
    await video.save()

    const playlist = await Playlist.findByIdAndUpdate(
      videoData.playlistId,
      {
        $push: { videos: video._id },
      },
      {
        new: true,
      }
    ).populate('videos')

    return {
      video: video._doc,
      playlist: playlist._doc,
    }
  }

  async removeVideoFromPlaylist(videoId, playlistId) {
    const video = await Video.findByIdAndDelete(videoId)

    try {
      fs.unlinkSync(video.uri)
    } catch (err) {
      console.log(err)
    }

    const playlist = await Playlist.findByIdAndUpdate(playlistId, {
      $pull: { videos: videoId },
    })

    return {
      video: video._doc,
      playlist: playlist._doc,
    }
  }
}

module.exports = VideoService
