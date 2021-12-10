import * as yup from 'yup'
import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { Validation } from '../../presentation/protocols'

export class UsuarioValidator implements Validation {
  async validate (input: any): Promise<Error|null> {
    const schema = yup.object().shape({
      nome: yup.string().required('Nome é obrigatório'),
      email: yup.string().required('Email é obrigatório').email('Email inválido'),
      celular: yup.string().required('Celular é obrigatório')
    })

    return await schema.validate(input).then(() => null)
      .catch(({ errors }) => new InvalidParamError(errors.pop()))
  }
}
