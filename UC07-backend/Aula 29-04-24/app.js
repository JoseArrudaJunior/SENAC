const express = require('express');
const app = express();
const port = 3000;
const produtoRoutes = require('./routes/produtoRoutes');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/produto', produtoRoutes);

app.get('/', (req, res)=>{
    res.send('Hoje é um dia legal');
});

app.listen(port, () =>{
    console.log(`Aplicação rodando em: http://localhost:${port}`);
});