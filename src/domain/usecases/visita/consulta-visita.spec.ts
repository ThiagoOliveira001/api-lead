import { DbConsultarVisita } from './consulta-visita'

interface SutTypes {
  sut: DbConsultarVisita
  apiStub: any
}

const makeApi = (): any => {
  class ApiStub {
    async info (): Promise<any> {
      return {
        value: 1
      }
    }
  }

  return new ApiStub()
}

const makeSut = (): SutTypes => {
  const apiStub = makeApi()
  const sut = new DbConsultarVisita(apiStub)
  return {
    sut,
    apiStub
  }
}

describe('ConsultaVisita usecase', () => {
  test('Deve retornar as visitas quando chamar o buscarQuantidadeVisita', async () => {
    const { sut } = makeSut()
    const registroVisita = await sut.buscarQuantidadeVisita()

    expect(registroVisita).toHaveProperty('visitas', expect.any(Number))
  })

  test('Deve chamar função info quando chamar o buscarQuantidadeVisita', async () => {
    const { sut, apiStub } = makeSut()
    const infoSpy = jest.spyOn(apiStub, 'info')
    await sut.buscarQuantidadeVisita()

    expect(infoSpy).toHaveBeenCalled()
  })
})
