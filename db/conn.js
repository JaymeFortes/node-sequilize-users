import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'sequilize-node',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    pool: {
      max: parseInt(process.env.DB_CONNECTION_LIMIT) || 10,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    logging: console.log // Para ver as queries SQL no console
  }
);

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão Sequelize estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar ao banco com Sequelize:', error);
  });

export default sequelize;
