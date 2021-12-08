export class InvalidParamError extends Error {
  constructor (errorMessage: string) {
    super(`Parametros inválidos: ${errorMessage}`)
    this.name = 'InvalidParamError'
  }
}
