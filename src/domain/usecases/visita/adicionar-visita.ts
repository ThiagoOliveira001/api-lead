import { RegistroVisita } from '../../models/RegistroVisita'

export interface AdicionarVisita {
  adicionar: () => Promise<RegistroVisita>
}

export class DbAdicionarVisita implements AdicionarVisita {
  private readonly api: any

  constructor (api: any) {
    this.api = api
  }

  async adicionar (): Promise<RegistroVisita> {
    const { value: visitas } = await this.api.hit('stone.com.br', 'visitas')

    return {
      visitas
    }
  }
}
