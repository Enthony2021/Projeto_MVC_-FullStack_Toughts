const { Sequelize } = require('sequelize')

// Configuração
const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// Conexão
try {
    sequelize.authenticate()
    console.log('Banco de dados conectado com sucesso.')
} catch (err) {
    console.log('Não foi possível conectar o Banco de Dados: ' + err)
}

module.exports = sequelize