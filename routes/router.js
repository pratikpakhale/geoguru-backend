const router = require('express').Router()

const testRouter = require('./test')
const userRouter = require('./user')
const authRouter = require('./auth')
const roleRouter = require('./role')
const playlistRouter = require('./playlist')
const videoRouter = require('./video')

router.use('/', testRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/roles', roleRouter)
router.use('/playlists', playlistRouter)
router.use('/videos', videoRouter)

module.exports = router
