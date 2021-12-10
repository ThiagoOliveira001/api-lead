# API Lead

## Principais tecnologias empregadas
- [NodeJs v16](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Jest](https://jestjs.io/docs/getting-started)
- [eslint](https://eslint.org/docs/user-guide/configuring/)
- [PostgresSQL 13.5](https://www.postgresql.org/docs/)

## Padrões de projeto
- [Padrão para as mensagens de commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Instalar dependências
```sh
npm install
```

## Variáveis de ambiente exemplo
```sh
PORT=3000
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=1234
DB_NAME=postgres
```
## Configurando o banco
```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed
```

## Testes
Teste integracao
```sh
npm run test:integration
```
Testes unitários
```sh
npm test
```

## Iniciando aplicação
```sh
npm run build
npm start
```