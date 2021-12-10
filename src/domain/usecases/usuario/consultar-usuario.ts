import { IUsuarioRepository } from '../../../data/repositories/repository.protocols'
import { Usuario } from '../../models/Usuario'

export interface ConsultarUsuario {
  consultar: (id: number) => Promise<Usuario|null>
}

export class DbConsultarUsuario implements ConsultarUsuario {
  private readonly usuarioRepository: IUsuarioRepository

  constructor (usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository
  }

  async consultar (id: number): Promise<Usuario|null> {
    const usuario = await this.usuarioRepository.buscarPorId(id)
    return usuario
  }
}
