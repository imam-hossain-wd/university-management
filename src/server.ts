import app from './app'
import mongoose from 'mongoose'
const port = 5000

const run = async () => {
  try {
    mongoose
      .connect('mongodb://127.0.0.1:27017/test')
      .then(() => console.log(`database connected successfully`))
      .then(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
}
run().catch(err => console.log(err))

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
