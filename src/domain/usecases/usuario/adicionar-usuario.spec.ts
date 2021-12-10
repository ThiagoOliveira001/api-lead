import { IUsuarioRepository } from '../../../data/repositories/repository.protocols'
import { Usuario } from '../../models/Usuario'
import { DbAdicionarUsuario } from './adicionar-usuario'

interface SutTypes {
  sut: DbAdicionarUsuario
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
  const sut = new DbAdicionarUsuario(usuarioRepositoryStub)
  return {
    sut,
    usuarioRepositoryStub
  }
}

describe('AdicionarUsuario usecase', () => {
  test('Deve retornar o usuário criado quando chamar adicionar', async () => {
    const { sut, usuarioRepositoryStub } = makeSut()
    jest.spyOn(usuarioRepositoryStub, 'buscarPorEmail').mockResolvedValueOnce(null)
    const usuario = {
      nome: 'qualquer_nome',
      email: 'qualquer_email',
      celular: 'qualquer_celular'
    }
    const usuarioNovo = await sut.adicionar(usuario)

    expect(usuarioNovo).toEqual(expect.objectContaining({
      id: expect.any(Number),
      nome: expect.any(String),
      email: expect.any(String),
      celular: expect.any(String)
    }))
  })

  test('Deve retornar null quando usuário com email igual existir', async () => {
    const { sut } = makeSut()
    const usuario = {
      nome: 'qualquer_nome',
      email: 'qualquer_email',
      celular: 'qualquer_celular'
    }
    const usuarioNovo = await sut.adicionar(usuario)

    expect(usuarioNovo).toBeNull()
  })
})
