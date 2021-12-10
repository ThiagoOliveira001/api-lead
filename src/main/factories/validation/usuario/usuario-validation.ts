import { UsuarioValidator } from '../../../../validation/usuario/usuario-validator'
import { Validation } from '../../../../presentation/protocols'

export const makeUsuarioValidator = (): Validation => {
  const validator = new UsuarioValidator()
  return validator
}
