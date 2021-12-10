import { IUsuarioRepository } from '../../../data/repositories/repository.protocols'
import { Usuario } from '../../models/Usuario'

export interface AdicionarUsuario {
  adicionar: (usuario: Usuario) => Promise<Usuario|null>
}

export class DbAdicionarUsuario implements AdicionarUsuario {
  private readonly usuarioRepository: IUsuarioRepository

  constructor (usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository
  }

  async adicionar (usuario: Usuario): Promise<Usuario|null> {
    const usuarioEmail = await this.usuarioRepository.buscarPorEmail(usuario.email)
    if (usuarioEmail) {
      return null
    }
    const usuarioNovo = await this.usuarioRepository.inserir(usuario)

    return usuarioNovo
  }
}
