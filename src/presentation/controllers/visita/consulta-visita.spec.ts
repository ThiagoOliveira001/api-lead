import { ConsultaVisitaController } from './consulta-visita'

interface SutTypes {
  sut: ConsultaVisitaController
}

const makeSut = (): SutTypes => {
  const sut = new ConsultaVisitaController()
  return {
    sut
  }
}

describe('ConsultaVisita Controller', () => {
  test('Deve retornar 200 quando chamado', async () => {
    const { sut } = makeSut()
    const httpRequest = {
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toHaveProperty('visitas', expect.any(Number))
  })
})
