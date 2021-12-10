import { AdicionarUsuario } from '../../../domain/usecases/usuario/adicionar-usuario'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { badRequest, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from './adicionar-usuario.protocols'

export class AdicionarUsuarioController implements Controller {
  private readonly adicionarUsuario: AdicionarUsuario
  private readonly usuarioValidator: Validation

  constructor (adicionarUsuario: AdicionarUsuario, usuarioValidation: Validation) {
    this.adicionarUsuario = adicionarUsuario
    this.usuarioValidator = usuarioValidation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const usuario = httpRequest.body
      const error = await this.usuarioValidator.validate(usuario)
      if (error) {
        return badRequest(error)
      }

      const usuarioNovo = await this.adicionarUsuario.adicionar(usuario)
      if (!usuarioNovo) {
        return badRequest(new InvalidParamError('Usuário já cadastrado'))
      }

      return ok(usuarioNovo)
    } catch (ex) {
      return serverError()
    }
  }
}
