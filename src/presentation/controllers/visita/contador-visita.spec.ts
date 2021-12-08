import { RegistroVisita } from '../../../domain/models/RegistroVisita'
import { ServerError } from '../../errors/server-error'
import { ContadorVisitaController } from './contador-visita'
import { AdicionarVisita } from './contador-visita.protocols'

interface SutTypes {
  sut: ContadorVisitaController
  adicionarVisitaStub: AdicionarVisita
}

const makeAdicionarVisita = (): AdicionarVisita => {
  class DbAdicionarVisita implements AdicionarVisita {
    async adicionar (): Promise<RegistroVisita> {
      return {
        visitas: 1
      }
    }
  }

  return new DbAdicionarVisita()
}

const makeSut = (): SutTypes => {
  const adicionarVisitaStub = makeAdicionarVisita()
  const sut = new ContadorVisitaController(adicionarVisitaStub)
  return {
    sut,
    adicionarVisitaStub
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

  test('Deve ser chamada função adicionar do AdicionarVisita quando chamado', async () => {
    const { sut, adicionarVisitaStub } = makeSut()
    const adicionarSpy = jest.spyOn(adicionarVisitaStub, 'adicionar')
    const httpRequest = {
    }
    await sut.handle(httpRequest)

    expect(adicionarSpy).toHaveBeenCalled()
  })

  test('Deve retornar 500 quando ocorre um erro no usecase', async () => {
    const { sut, adicionarVisitaStub } = makeSut()
    jest.spyOn(adicionarVisitaStub, 'adicionar').mockRejectedValueOnce(new Error())
    const httpRequest = {
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
