import { ConsultaVisitaController } from '../../../../presentation/controllers/visita/consulta-visita'
import { Controller } from '../../../../presentation/protocols'
import { makeConsultarVisita } from '../../usecases/visita/consultar-visita'

export const makeConsultaVisitaController = (): Controller => {
  const consultarVisita = makeConsultarVisita()
  const controller = new ConsultaVisitaController(consultarVisita)
  return controller
}
