import { app } from './app.js'
import { logger } from './logger.js'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3030 // ✅ THIS IS KEY FOR RENDER
const host = '0.0.0.0' // Optional, just for logs

process.on('unhandledRejection', reason => {
  logger.error('Unhandled Rejection %O', reason)
})

app.listen(port).then(() => {
  logger.info(`✅ Feathers app listening on http://${host}:${port}`)
})
