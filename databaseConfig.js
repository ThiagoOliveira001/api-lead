require('dotenv').config()

const config = () => {
  if (process.env.NODE_ENV === 'TEST') {
    return {
      dialect: 'sqlite',
      storage: './database.sqlite'
    }
  }

  return {
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      connectTimeout: 60000,
      options: {
        requestTimeout: 600000,
        encrypt: false,
        validateBulkLoadParameters: false
      },
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: false,
      underscoredAll: false
    },
    logging: false,
    logQueryParameters: false
  }
}

module.exports = config()
