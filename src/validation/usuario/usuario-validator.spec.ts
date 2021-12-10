import faker from 'faker'
import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { UsuarioValidator } from './usuario-validator'

interface SutTypes {
  sut: UsuarioValidator
}

const makeSut = (): SutTypes => {
  const sut = new UsuarioValidator()
  return {
    sut
  }
}

describe('UsuarioValidator', () => {
  test('Deve retornar null quando os dados forem válidos', async () => {
    const { sut } = makeSut()
    const usuario = {
      email: faker.internet.email(),
      nome: faker.name.firstName(),
      celular: faker.phone.phoneNumber('###########')
    }
    const error = await sut.validate(usuario)

    expect(error).toBeNull()
  })

  test('Deve retornar um erro quando o email for inválido', async () => {
    const { sut } = makeSut()
    const usuario = {
      email: 'qualquer_email',
      nome: faker.name.firstName(),
      celular: faker.phone.phoneNumber('###########')
    }
    const error = await sut.validate(usuario)

    expect(error).toEqual(expect.any(InvalidParamError))
  })

  test('Deve retornar um erro quando nome for inválido', async () => {
    const { sut } = makeSut()
    const usuario = {
      email: faker.internet.email(),
      nome: null,
      celular: faker.phone.phoneNumber('###########')
    }
    const error = await sut.validate(usuario)

    expect(error).toEqual(expect.any(InvalidParamError))
  })

  test('Deve retornar um erro quando senha for inválido', async () => {
    const { sut } = makeSut()
    const usuario = {
      email: faker.internet.email(),
      nome: faker.name.firstName(),
      celular: null
    }
    const error = await sut.validate(usuario)

    expect(error).toEqual(expect.any(InvalidParamError))
  })
})
