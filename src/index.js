import { app } from './app.js'
import { logger } from './logger.js'
import dotenv from 'dotenv'

dotenv.config()

// ✅ Use Render's port if available, fallback to what's in your config
const port = process.env.PORT || app.get('port') || 3030
const host = app.get('host') || '0.0.0.0'

process.on('unhandledRejection', reason => {
  logger.error('Unhandled Rejection %O', reason)
})

// Start the server
app.listen(port).then(() => {
  logger.info(`✅ Feathers app listening on http://${host}:${port}`)
})
