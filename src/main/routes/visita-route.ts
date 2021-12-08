/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeContadorVisitaController } from '../factories/controllers/visita/contador-visita-controller-factory'
import { Router } from 'express'
import { makeConsultaVisitaController } from '../factories/controllers/visita/consulta-visita-controller-factory'

/**
 * @openapi
 * /visita/adicionar:
 *   post:
 *     tags:
 *       - Visitas
 *     summary: Adiciona uma visita na contagem de visitas
 *     responses:
 *       200:
 *         description: Retorna o número de visitas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 visitas:
 *                   type: integer
 *       500:
 *         $ref: '#/components/schemas/Http500'
 */
export default (router: Router): any => {
  router.post('/visita/adicionar', adaptRoute(makeContadorVisitaController()))

  /**
  * @openapi
  * /visita/consultar:
  *   get:
  *     tags:
  *       - Visitas
  *     summary: Consulta a quantidade de visitas
  *     responses:
  *       200:
  *         description: Retorna o número de visitas
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 visitas:
  *                   type: integer
  *       500:
  *         $ref: '#/components/schemas/Http500'
  */
  router.get('/visita/consultar', adaptRoute(makeConsultaVisitaController()))
}
