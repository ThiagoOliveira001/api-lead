import { DbAdicionarVisita } from './adicionar-visita'

interface SutTypes {
  sut: DbAdicionarVisita
  apiStub: any
}

const makeApi = (): any => {
  class ApiStub {
    async hit (): Promise<any> {
      return {
        value: 1
      }
    }
  }

  return new ApiStub()
}

const makeSut = (): SutTypes => {
  const apiStub = makeApi()
  const sut = new DbAdicionarVisita(apiStub)
  return {
    sut,
    apiStub
  }
}

describe('AdicionarVisita usecase', () => {
  test('Deve retornar as visitas quando chamar o adicionar', async () => {
    const { sut } = makeSut()
    const registroVisita = await sut.adicionar()

    expect(registroVisita).toHaveProperty('visitas', expect.any(Number))
  })

  test('Deve chamar função hit quando chamar o adicionar', async () => {
    const { sut, apiStub } = makeSut()
    const hintSpy = jest.spyOn(apiStub, 'hit')
    await sut.adicionar()

    expect(hintSpy).toHaveBeenCalled()
  })
})
