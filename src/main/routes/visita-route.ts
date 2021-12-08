/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeContadorVisitaController } from '../factories/controllers/visita/contador-visita-controller-factory'
import { Router } from 'express'

export default (router: Router): any => {
  router.post('/visita/adicionar', adaptRoute(makeContadorVisitaController()))
}
