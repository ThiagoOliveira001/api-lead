import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAdicionarUsuarioController } from '../factories/controllers/usuario/adicionar-usuario-controller-factory'
import { makeConsultarUsuarioController } from '../factories/controllers/usuario/consultar-usuario-controller-factory'

export default (router: Router): any => {
  /**
   * @openapi
   * /usuario/adicionar:
   *   post:
   *     tags:
   *       - Usuario
   *     summary: Cria um usuário
   *     requestBody:
   *       description: Dados do usuário
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               nome:
   *                 type: string
   *               email:
   *                 type: string
   *               celular:
   *                 type: string
   *     responses:
   *       200:
   *         description: Retorna usuário criado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: number
   *                 nome:
   *                   type: string
   *                 email:
   *                   type: string
   *                 celular:
   *                   type: string
   *       400:
   *         $ref: '#/components/schemas/Http400'
   *       500:
   *         $ref: '#/components/schemas/Http500'
   */
  router.post('/usuario/adicionar', adaptRoute(makeAdicionarUsuarioController()))

  /**
   * @openapi
   * /usuario/consultar/{id}:
   *   get:
   *     tags:
   *       - Usuario
   *     summary: Retorna os dados do usuário cujo id foi enviado
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Retorna um usuário
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                 nome:
   *                   type: string
   *                 email:
   *                   type: string
   *                 celular:
   *                   type: string
   *       400:
   *         $ref: '#/components/schemas/Http400'
   *       500:
   *         $ref: '#/components/schemas/Http500'
   */
  router.get('/usuario/consultar/:id', adaptRoute(makeConsultarUsuarioController()))
}
