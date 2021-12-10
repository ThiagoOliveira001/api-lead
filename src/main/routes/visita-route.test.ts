import request from 'supertest'
import app from '../config/app'

describe('Visita route', () => {
  describe('POST /adicionar', () => {
    test('Deve retornar 200 no adicionar', async () => {
      await request(app)
        .post('/api/v1/visita/adicionar')
        .send({})
        .expect(200)
    })
  })

  describe('GET /consultar', () => {
    test('Deve retornar 200 no consultar', async () => {
      await request(app)
        .get('/api/v1/visita/consultar')
        .expect(200)
    })
  })
})
