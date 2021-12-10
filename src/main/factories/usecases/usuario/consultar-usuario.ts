import { UsuarioRepository } from '../../../../data/repositories/usuario/usuario-repository'
import { ConsultarUsuario, DbConsultarUsuario } from '../../../../domain/usecases/usuario/consultar-usuario'

export const makeConsultarUsuario = (): ConsultarUsuario => {
  const usecase = new DbConsultarUsuario(new UsuarioRepository())
  return usecase
}
