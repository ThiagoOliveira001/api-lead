import { AdicionarUsuarioController } from '../../../../presentation/controllers/usuario/adicionar-usuario'
import { Controller } from '../../../../presentation/protocols'
import { makeAdicionarUsuario } from '../../usecases/usuario/adicionar-usuario'
import { makeUsuarioValidator } from '../../validation/usuario/usuario-validation'

export const makeAdicionarUsuarioController = (): Controller => {
  const adicionarUsuario = makeAdicionarUsuario()
  const usuarioValidator = makeUsuarioValidator()
  const controller = new AdicionarUsuarioController(adicionarUsuario, usuarioValidator)

  return controller
}
