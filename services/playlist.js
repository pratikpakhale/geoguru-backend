const fs = require('fs')
const Playlist = require('../models/playlist')

class PlaylistService {
  async createPlaylist(playlistData, file) {
    const playlist = await Playlist.create({
      ...playlistData,
      data: JSON.parse(playlistData.data),
      thumbnail: file,
    })

    return {
      ...playlist._doc,
    }
  }

  async getPlaylistById(playlistId) {
    const playlist = await Playlist.findById(playlistId).populate('videos')

    return {
      ...playlist._doc,
    }
  }

  async updatePlaylist(playlistId, playlistData, file) {
    const playlist = await Playlist.findByIdAndUpdate(
      playlistId,
      {
        ...playlistData,
        thumbnail: file,
      },
      { new: true }
    ).populate('videos')

    return {
      ...playlist._doc,
    }
  }

  async deletePlaylist(playlistId) {
    const playlist = await Playlist.findByIdAndDelete(playlistId)
    const videos = playlist.videos
    try {
      videos.forEach(video => {
        fs.unlink(video.uri, err => {
          if (err) throw err
        })
      })
    } catch (err) {
      console.log(err)
    }
    return {
      ...playlist._doc,
    }
  }

  async getAllPlaylists() {
    const playlists = await Playlist.find().populate('videos')

    return playlists.map(playlist => ({
      ...playlist._doc,
    }))
  }
}

module.exports = PlaylistService
