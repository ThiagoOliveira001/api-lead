import { Usuario } from '../../../domain/models/Usuario'
import { AdicionarUsuario } from '../../../domain/usecases/usuario/adicionar-usuario'
import { AdicionarUsuarioController } from './adicionar-usuario'
import { Validation } from './adicionar-usuario.protocols'

interface SutTypes {
  sut: AdicionarUsuarioController
  adicionarUsuarioStub: AdicionarUsuario
  usuarioValidatorStub: Validation
}

const makeAdicionarUsuario = (): AdicionarUsuario => {
  class DbAdicionarUsuarioStub implements AdicionarUsuario {
    async adicionar (usuario: Usuario): Promise<Usuario> {
      return {
        id: 1,
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_celular'
      }
    }
  }

  return new DbAdicionarUsuarioStub()
}

const makeUsuarioValidator = (): Validation => {
  class UsuarioValidatorStub implements Validation {
    async validate (usuario: any): Promise<Error|null> {
      return null
    }
  }

  return new UsuarioValidatorStub()
}

const makeSut = (): SutTypes => {
  const usuarioValidatorStub = makeUsuarioValidator()
  const adicionarUsuarioStub = makeAdicionarUsuario()
  const sut = new AdicionarUsuarioController(adicionarUsuarioStub, usuarioValidatorStub)

  return {
    sut,
    usuarioValidatorStub,
    adicionarUsuarioStub
  }
}

describe('AdicionarUsuario Controller', () => {
  test('Deve retornar 200 quando passado dados válidos', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_telefone'
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
  })

  test('Deve chamar validate e adicionar', async () => {
    const { sut, usuarioValidatorStub, adicionarUsuarioStub } = makeSut()
    const validateSpy = jest.spyOn(usuarioValidatorStub, 'validate')
    const adicionarSpy = jest.spyOn(adicionarUsuarioStub, 'adicionar')
    const httpRequest = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_telefone'
      }
    }
    await sut.handle(httpRequest)

    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    expect(adicionarSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Deve retornar 400 quando dados inválidos são passados', async () => {
    const { sut, usuarioValidatorStub } = makeSut()
    jest.spyOn(usuarioValidatorStub, 'validate').mockResolvedValueOnce(new Error('erro'))
    const httpRequest = {
      body: {

      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toHaveProperty('message', 'erro')
  })

  test('Deve retornar 400 quando existir usuário com email na base', async () => {
    const { sut, adicionarUsuarioStub } = makeSut()
    jest.spyOn(adicionarUsuarioStub, 'adicionar').mockResolvedValueOnce(null)
    const httpRequest = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_telefone'
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toHaveProperty('message', expect.any(String))
  })

  test('Deve retornar 500 quando um erro inesperado é retornado', async () => {
    const { sut, usuarioValidatorStub } = makeSut()
    jest.spyOn(usuarioValidatorStub, 'validate').mockRejectedValueOnce(new Error())
    const httpRequest = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_telefone'
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toHaveProperty('message', expect.any(String))
  })
})
