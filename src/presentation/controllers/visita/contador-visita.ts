import { Controller, HttpRequest, HttpResponse, AdicionarVisita } from './contador-visita.protocols'
import { ok } from '../../helpers/http-helper'

export class ContadorVisitaController implements Controller {
  private readonly adicionarVisita: AdicionarVisita

  constructor (adicionarVisita: AdicionarVisita) {
    this.adicionarVisita = adicionarVisita
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const registroVisita = await this.adicionarVisita.adicionar()
    return ok(registroVisita)
  }
}
