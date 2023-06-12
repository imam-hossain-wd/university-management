import express, { Application, urlencoded } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/user.router'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use('/api/v1/user', userRoutes)

export default app
