const express = require('express');
const app = express();
const porta = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.send('Hoje é quinta-feira 25-04-2024');
});

app.get('/cadastro', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'))
})

app.post('/cadastro',(req, res)=>{
    const {nome, telefone, idade} = req.body;
    console.log(`Nome = ${nome} Telefone = ${telefone} Idade = ${idade}`);
    res.send(`Nome = ${nome} Telefone = ${telefone} Idade = ${idade}`);
});


app.listen(porta, ()=>{
    console.log(`http://localhost:${porta}`);
})


