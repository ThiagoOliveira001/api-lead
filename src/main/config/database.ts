import { Sequelize, Options } from 'sequelize'
import config from '../../../databaseConfig'
import * as models from '../../data/models'

const options = config as Options

export default (): void => {
  const connection = new Sequelize(options)

  Object.keys(models).forEach((model) => {
    // Iniciando model
    models[model](connection)
  })
}
