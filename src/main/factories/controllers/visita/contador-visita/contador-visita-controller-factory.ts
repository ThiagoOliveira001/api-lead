import { Controller } from '../../../../../presentation/protocols'
import { ContadorVisitaController } from '../../../../../presentation/controllers/visita/contador-visita'

export const makeContadorVisitaController = (): Controller => {
  const controller = new ContadorVisitaController()
  return controller
}
