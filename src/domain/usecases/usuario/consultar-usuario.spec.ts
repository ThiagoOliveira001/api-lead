import { Usuario } from '../../../data/models/usuario'
import { IUsuarioRepository } from '../../../data/repositories/repository.protocols'
import { DbConsultarUsuario } from './consultar-usuario'

interface SutTypes {
  sut: DbConsultarUsuario
  usuarioRepositoryStub: IUsuarioRepository
}

const makeUsuarioRepository = (): IUsuarioRepository => {
  class UsuarioRepositoryStub implements IUsuarioRepository {
    async inserir (usuario: Usuario): Promise<any> {
      return {
        id: 1,
        ...usuario
      }
    }

    async buscarPorId (id: number): Promise<any> {
      return {
        id: 1,
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_celular'
      }
    }

    async buscarPorEmail (email: string): Promise<any> {
      return {
        id: 1,
        nome: 'qualquer_nome',
        email: 'qualquer_email',
        celular: 'qualquer_celular'
      }
    }
  }

  return new UsuarioRepositoryStub()
}

const makeSut = (): SutTypes => {
  const usuarioRepositoryStub = makeUsuarioRepository()
  const sut = new DbConsultarUsuario(usuarioRepositoryStub)
  return {
    sut,
    usuarioRepositoryStub
  }
}

describe('ConsultarUsuario usecase', () => {
  test('Deve retornar o usuário quando passado um id existente', async () => {
    const { sut } = makeSut()
    const id = 1
    const usuario = await sut.consultar(id)

    expect(usuario).toEqual(expect.objectContaining({
      id: expect.any(Number),
      nome: expect.any(String),
      email: expect.any(String),
      celular: expect.any(String)
    }))
  })

  test('Deve retornar null quando passado um id inexistente', async () => {
    const { sut, usuarioRepositoryStub } = makeSut()
    jest.spyOn(usuarioRepositoryStub, 'buscarPorId').mockResolvedValueOnce(null)
    const id = 1
    const usuario = await sut.consultar(id)

    expect(usuario).toBeNull()
  })
})
