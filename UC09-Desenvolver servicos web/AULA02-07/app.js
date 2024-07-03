const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const sequelize  = require('./src/config/database');
const produtoRoutes = require('./src/routes/produtoRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
app.use(express.json());
app.use('/produto', produtoRoutes);
app.use('/categoria', categoriaRoutes);

sequelize.sync(() =>{
    console.log('Banco de dados Conectado');
});

app.listen(port, () =>{
    console.log(`aplicação rodando em http://${process.env.DB_HOST}:${port}`);
});