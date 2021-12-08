import { Controller } from '../../../../presentation/protocols'
import { ContadorVisitaController } from '../../../../presentation/controllers/visita/contador-visita'
import { makeAdicionarVisita } from '../../usecases/visita/adicionar-visita'

export const makeContadorVisitaController = (): Controller => {
  const adicionarVisita = makeAdicionarVisita()
  const controller = new ContadorVisitaController(adicionarVisita)
  return controller
}
