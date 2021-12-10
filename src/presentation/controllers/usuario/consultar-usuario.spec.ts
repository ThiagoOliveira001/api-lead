import { Usuario } from '../../../domain/models/Usuario'
import { ConsultarUsuario } from '../../../domain/usecases/usuario/consultar-usuario'
import { ConsultarUsuarioController } from './consultar-usuario'

interface SutTypes {
  sut: ConsultarUsuarioController
  consultarUsuarioStub: ConsultarUsuario
}

const makeConsultarUsuario = (): ConsultarUsuario => {
  class DbConsultarUsuarioStub implements ConsultarUsuario {
    async consultar (id: number): Promise<Usuario> {
      return {
        id: 1,
        nome: 'qualquer_nome',
        email: 'qualquer_nome',
        celular: 'qualquer_celular'
      }
    }
  }

  return new DbConsultarUsuarioStub()
}

const makeSuit = (): SutTypes => {
  const consultarUsuarioStub = makeConsultarUsuario()
  const sut = new ConsultarUsuarioController(consultarUsuarioStub)

  return {
    sut,
    consultarUsuarioStub
  }
}

describe('ConsultarUsuario Controller', () => {
  test('Deve retonar 200 quando um id existente é passado', async () => {
    const { sut } = makeSuit()
    const httpRequest = {
      params: {
        id: 1
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(expect.objectContaining({
      id: expect.any(Number),
      nome: expect.any(String),
      email: expect.any(String),
      celular: expect.any(String)
    }))
  })

  test('Deve chamar consultar quando chamado', async () => {
    const { sut, consultarUsuarioStub } = makeSuit()
    const consultarSpy = jest.spyOn(consultarUsuarioStub, 'consultar')
    const httpRequest = {
      params: {
        id: 1
      }
    }
    await sut.handle(httpRequest)

    expect(consultarSpy).toHaveBeenCalledWith(httpRequest.params.id)
  })

  test('Deve retornar 400 quando id é inexistente', async () => {
    const { sut, consultarUsuarioStub } = makeSuit()
    jest.spyOn(consultarUsuarioStub, 'consultar').mockResolvedValueOnce(null)
    const httpRequest = {
      params: {
        id: 1
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toHaveProperty('message', expect.any(String))
  })
})
