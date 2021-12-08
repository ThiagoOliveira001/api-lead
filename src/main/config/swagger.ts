import { Express } from 'express'
import swaggerJsDocs from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Lead',
    version: '1.0.0',
    description: 'API para contagem de visitas e cadastro de contas'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local'
    }
  ],
  components: {
    schemas: {
      Http400: {
        description: 'Parametros enviados pelo client são inválidos',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      Http500: {
        description: 'Ocorreu um erro inesperado no servidor',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
}
const options = {
  apis: ['../routes/*.ts'],
  swaggerDefinition
}
const specs = swaggerJsDocs(options)

export default (app: Express): void => {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs.default))
}
