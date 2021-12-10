import { Usuario } from '../../models/usuario'
import { UsuarioRepository } from './usuario-repository'
import { IUsuarioRepository } from './usuario-repository.protocols'

interface SutTypes {
  sut: IUsuarioRepository
}

const makeSut = (): SutTypes => {
  const sut = new UsuarioRepository()
  return {
    sut
  }
}

const makeUsuario = (): any => {
  return {
    id: 1,
    nome: 'qualquer_nome',
    celular: 'qualquer_celular',
    email: 'qualquer_email'
  }
}

describe('Usuario Repository', () => {
  describe('inserir', () => {
    test('Deve chamar o create do model Usuario', async () => {
      const { sut } = makeSut()
      const createSpy = jest.spyOn(Usuario, 'create').mockResolvedValueOnce(makeUsuario())
      const usuario = {
        nome: 'qualquer_nome',
        celular: 'qualquer_celular',
        email: 'qualquer_email'
      }
      await sut.inserir(usuario)

      expect(createSpy).toHaveBeenCalledWith(usuario)
    })
  })

  describe('buscarPorId', () => {
    test('Deve chamar findByPk do model Usuario', async () => {
      const { sut } = makeSut()
      const findByPkSpy = jest.spyOn(Usuario, 'findByPk').mockResolvedValueOnce(makeUsuario())
      const id = 1
      await sut.buscarPorId(id)

      expect(findByPkSpy).toHaveBeenCalledWith(id)
    })
  })

  describe('buscarPorEmail', () => {
    test('Deve chamar findOne do model Usuario', async () => {
      const { sut } = makeSut()
      const findOneSpy = jest.spyOn(Usuario, 'findOne').mockResolvedValueOnce(makeUsuario())
      const email = 'qualquer_email'
      await sut.buscarPorEmail(email)

      expect(findOneSpy).toHaveBeenCalledWith(expect.objectContaining({
        attributes: expect.any(Array),
        where: expect.objectContaining({
          email: expect.any(Object)
        })
      }))
    })
  })
})
