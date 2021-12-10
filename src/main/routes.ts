import { Express, Router } from 'express'
import visitaRoute from './routes/visita-route'
import usuarioRoute from './routes/usuario-route'

export default (app: Express): void => {
  const router = Router()
  app.use('/api/v1', router)

  visitaRoute(router)
  usuarioRoute(router)
}
