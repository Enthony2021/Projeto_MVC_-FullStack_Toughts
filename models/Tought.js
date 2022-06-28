const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
})

Tought.belongsTo(User) // Pensamento pertence ao Usuário
User.hasMany(Tought) // Usuário pode ter muitos pensamentos

module.exports = Tought