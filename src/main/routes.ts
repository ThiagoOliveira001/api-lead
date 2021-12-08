import { Express, Router } from 'express'
import visitaRoute from './routes/visita-route'

export default (app: Express): void => {
  const router = Router()
  app.use('/api/v1', router)

  visitaRoute(router)
}
