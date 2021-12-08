import { ConsultarVisita } from '../../../domain/usecases/visita/consulta-visita'
import { ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from './consulta-visita.protocols'

export class ConsultaVisitaController implements Controller {
  private readonly consultaVisita: ConsultarVisita

  constructor (consultaVisita: ConsultarVisita) {
    this.consultaVisita = consultaVisita
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const registroVisita = await this.consultaVisita.buscarQuantidadeVisita()

      return ok(registroVisita)
    } catch (ex) {
      return serverError()
    }
  }
}
