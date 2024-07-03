const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    categoriaId: {
        type: DataTypes.INTEGER, 
        references: {
            model: Categoria,
            key: 'id'
        }
    }
});

Produto.belongsTo(Categoria, {foreignKey:'categoriaId'});
Categoria.hasMany(Produto, {foreignKey:'categoriaId'});

module.exports = Produto;