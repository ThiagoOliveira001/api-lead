export class ServerError extends Error {
  constructor () {
    super('Ops, tivemos um pequeno problema, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
