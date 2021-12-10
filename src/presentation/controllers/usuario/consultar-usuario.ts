import { ConsultarUsuario } from '../../../domain/usecases/usuario/consultar-usuario'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { badRequest, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from './adicionar-usuario.protocols'

export class ConsultarUsuarioController implements Controller {
  private readonly consultarUsuario: ConsultarUsuario

  constructor (consultarUsuario: ConsultarUsuario) {
    this.consultarUsuario = consultarUsuario
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = +httpRequest.params.id
      const usuario = await this.consultarUsuario.consultar(id)
      if (!usuario) {
        return badRequest(new InvalidParamError('Usuário não encontrado'))
      }

      return ok(usuario)
    } catch (ex) {
      return serverError()
    }
  }
}
