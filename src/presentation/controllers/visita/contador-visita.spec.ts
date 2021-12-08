import { ContadorVisitaController } from './contador-visita'

interface SutTypes {
  sut: ContadorVisitaController
}

const makeSut = (): SutTypes => {
  const sut = new ContadorVisitaController()
  return {
    sut
  }
}

describe('ContadorVisita Controller', () => {
  test('Deve retornar 200 quando chamado', async () => {
    const { sut } = makeSut()
    const httpRequest = {
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toHaveProperty('visitas', expect.any(Number))
  })
})
