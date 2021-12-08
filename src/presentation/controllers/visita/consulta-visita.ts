import { ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from './consulta-visita.protocols'

export class ConsultaVisitaController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ visitas: 1 })
    } catch (ex) {
      return serverError()
    }
  }
}
