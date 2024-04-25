const express = require('express');
const app = express();
const porta = 3000;
const path = require('path');
app.use(express.static('public'));//configurando a pasta public para arquivos css, javascript, imagens... etc.

app.get('/', (req,res) =>{
    res.send('Hoje estou bem, até o momento!');
});

app.get('/pagina01', (req,res) =>{
    res.sendFile(path.join(__dirname, 'pagina01.html'));
});
app.get('/pagina02', (req, res)=>{
    res.sendFile(path.join(__dirname , 'pagina02.html'));
});

app.get('/pagina03', (req,res)=>{
    res.sendFile(path.join(__dirname, 'pagina03.html'));
});


app.listen(porta, ()=>{
    console.log(`aplicação rodando em http://localhost:${porta}`);
})


