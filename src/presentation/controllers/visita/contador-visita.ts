import { Controller, HttpRequest, HttpResponse } from './contador-visita.protocols'
import { ok } from '../../helpers/http-helper'

export class ContadorVisitaController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok({ visitas: 1 })
  }
}
