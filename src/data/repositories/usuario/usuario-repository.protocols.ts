export interface IUsuarioRepository {
  inserir: (dados: any) => Promise<any>
  buscarPorId: (identificador: number) => Promise<any>
  buscarPorEmail: (email: string) => Promise<any>
}
