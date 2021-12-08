import { RegistroVisita } from '../../models/RegistroVisita'

export interface ConsultarVisita {
  buscarQuantidadeVisita: () => Promise<RegistroVisita>
}

export class DbConsultarVisita implements ConsultarVisita {
  private readonly api: any

  constructor (api: any) {
    this.api = api
  }

  async buscarQuantidadeVisita (): Promise<RegistroVisita> {
    const { value: visitas } = await this.api.info('stone.com.br', 'visitas')

    return {
      visitas
    }
  }
}
