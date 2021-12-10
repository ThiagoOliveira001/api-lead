import request from 'supertest'
import faker from 'faker'
import app from '../config/app'

describe('Usuário route', () => {
  describe('POST /adicionar', () => {
    test('Deve retornar 200 no adicionar', async () => {
      await request(app)
        .post('/api/v1/usuario/adicionar')
        .send({
          nome: faker.name.firstName(),
          email: faker.internet.email(),
          celular: faker.phone.phoneNumber('###########')
        })
        .expect(200)
    })
  })

  describe('GET /consultar', () => {
    test('Deve retornar 200 no consultar', async () => {
      const id = 1
      await request(app)
        .get(`/api/v1/usuario/consultar/${id}`)
        .expect(200)
    })
  })
})
