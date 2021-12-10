import { Model, DataTypes } from 'sequelize'

export class Usuario extends Model {
  public id?: number
  public nome: string
  public email: string
  public celular: string
  public dataCriacao: string
  public dataAlteracao: string
}

export const initModel = (sequelize: any): any => {
  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    dataCriacao: {
      type: DataTypes.DATE
    },
    dataAlteracao: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAlteracao',
    tableName: 'Usuario'
  })

  return Usuario
}
