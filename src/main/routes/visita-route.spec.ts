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
})
