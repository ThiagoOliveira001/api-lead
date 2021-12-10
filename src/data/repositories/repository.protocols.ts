export interface IRepository {
  inserir: (dados: any) => Promise<any>
  buscarPorId: (identificador: any) => Promise<any>
}

export * from './usuario/usuario-repository.protocols'
