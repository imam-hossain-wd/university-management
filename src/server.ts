import app from './app'
import mongoose from 'mongoose'
import config from './config/index'
import { errorlogger, logger } from './shared/winston/logger'

const run = async () => {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => logger.info(`database is connected successfully`))
  } catch (err) {
    errorlogger.error(err)
  }
}
run().catch(err => errorlogger.error(err))

app.listen(config.port, () => {
  console.log(`server is running at port ${config.port}`)
})
