import countapi from 'countapi-js'

import { AdicionarVisita, DbAdicionarVisita } from '../../../../domain/usecases/visita/adicionar-visita'

export const makeAdicionarVisita = (): AdicionarVisita => {
  const usecase = new DbAdicionarVisita(countapi)
  return usecase
}
