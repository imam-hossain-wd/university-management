import app from './app'
import mongoose from 'mongoose'
import config from './config/index'

const port = 8080
const run = async () => {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log(`database is connected successfully`))
      .then(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
}
run().catch(err => console.log(err))

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
