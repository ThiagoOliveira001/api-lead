import { ConsultarUsuarioController } from '../../../../presentation/controllers/usuario/consultar-usuario'
import { Controller } from '../../../../presentation/protocols'
import { makeConsultarUsuario } from '../../usecases/usuario/consultar-usuario'

export const makeConsultarUsuarioController = (): Controller => {
  const consultarUsuario = makeConsultarUsuario()
  const controller = new ConsultarUsuarioController(consultarUsuario)
  return controller
}
