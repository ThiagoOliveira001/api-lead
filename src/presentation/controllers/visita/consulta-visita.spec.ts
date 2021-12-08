import { RegistroVisita } from '../../../domain/models/RegistroVisita'
import { ConsultarVisita } from '../../../domain/usecases/visita/consulta-visita'
import { ServerError } from '../../errors/server-error'
import { ConsultaVisitaController } from './consulta-visita'

interface SutTypes {
  sut: ConsultaVisitaController
  consultarVisitaStub: ConsultarVisita
}

const makeConsultarVisita = (): ConsultarVisita => {
  class DbConsultarVisita implements ConsultarVisita {
    async buscarQuantidadeVisita (): Promise<RegistroVisita> {
      return {
        visitas: 1
      }
    }
  }

  return new DbConsultarVisita()
}

const makeSut = (): SutTypes => {
  const consultarVisitaStub = makeConsultarVisita()
  const sut = new ConsultaVisitaController(consultarVisitaStub)
  return {
    sut,
    consultarVisitaStub
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

  test('Deve ser chamada função buscarQuantidadeVisita do ConsultarVisita', async () => {
    const { sut, consultarVisitaStub } = makeSut()
    const consultarSpy = jest.spyOn(consultarVisitaStub, 'buscarQuantidadeVisita')
    const httpRequest = {
    }
    await sut.handle(httpRequest)

    expect(consultarSpy).toHaveBeenCalled()
  })

  test('Deve retornar 500 quando ocorre um erro no usecase', async () => {
    const { sut, consultarVisitaStub } = makeSut()
    jest.spyOn(consultarVisitaStub, 'buscarQuantidadeVisita').mockRejectedValueOnce(new Error())
    const httpRequest = {
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
