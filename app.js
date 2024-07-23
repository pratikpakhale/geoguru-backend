const express = require('express')
const cors = require('cors')

const { applyFeatureFlags, useFeatureFlag } = require('./utils/featureFlags')
const env = require('./config/env')
const errorHandler = require('./middlewares/errorHandler')

require('./config/database')

const app = express()
const router = require('./routes/router')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))

app.use(applyFeatureFlags)

app.use(useFeatureFlag('cors', cors))

app.use('/api', router)

app.use(errorHandler.get404)
app.use(errorHandler.global)

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`)
})

process.on('uncaughtException', error => {
  // console.log('Uncaught Exception: ', error)
  // process.exit(1)
})
