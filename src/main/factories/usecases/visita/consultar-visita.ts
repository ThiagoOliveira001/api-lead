import countapi from 'countapi-js'
import { ConsultarVisita, DbConsultarVisita } from '../../../../domain/usecases/visita/consulta-visita'

export const makeConsultarVisita = (): ConsultarVisita => {
  const usecase = new DbConsultarVisita(countapi)
  return usecase
}
