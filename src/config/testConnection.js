import sequelize from './database.js';

async function testConnection() {
    try {
        await sequelize.authenticate();

        console.log('Conexão com o MySQL realizada com sucesso!');

    } catch (error) {
        console.error('Erro ao conectar com o MySQL:', error.message);

    } finally {
        await sequelize.close();
    }
}

testConnection();