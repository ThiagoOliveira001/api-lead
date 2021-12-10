import { UsuarioRepository } from '../../../../data/repositories/usuario/usuario-repository'
import { AdicionarUsuario, DbAdicionarUsuario } from '../../../../domain/usecases/usuario/adicionar-usuario'

export const makeAdicionarUsuario = (): AdicionarUsuario => {
  const usecase = new DbAdicionarUsuario(new UsuarioRepository())
  return usecase
}
