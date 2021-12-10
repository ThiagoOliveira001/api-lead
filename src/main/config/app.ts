import express from 'express'
import dotenv from 'dotenv'
import setupRoute from '../routes'
import setupSwagger from './swagger'
import setupDatabase from './database'

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

setupRoute(app)
setupSwagger(app)
setupDatabase()

export default app
