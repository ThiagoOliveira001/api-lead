import express from 'express'
import dotenv from 'dotenv'
import setupRoute from '../routes'
import setupSwagger from './swagger'

dotenv.config()
const app = express()
setupRoute(app)
setupSwagger(app)

export default app
