import { Op } from 'sequelize'
import { Usuario } from '../../models/usuario'
import { IUsuarioRepository } from './usuario-repository.protocols'

export class UsuarioRepository implements IUsuarioRepository {
  async inserir (usuario: Usuario): Promise<any> {
    const usuarioNovo = await Usuario.create(usuario)

    return usuarioNovo
  }

  async buscarPorId (id: number): Promise<any> {
    const usuario = await Usuario.findByPk(id)

    return usuario
  }

  async buscarPorEmail (email: string): Promise<any> {
    const usuario = await Usuario.findOne({
      attributes: ['id', 'nome'],
      where: {
        email: {
          [Op.like]: email
        }
      }
    })

    return usuario
  }
}
