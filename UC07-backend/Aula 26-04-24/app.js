const express = require('express');
const app = express();
const port = 3000; //porta de acesso a aplicação
const path = require('path'); //para usuarios terem acesso a pasta public da aplicação

app.use(express.static('public')); //definir uma pasta para acessar arquivos estaticos (html, img, js, css..)
app.use(express.json());//comando para tratar dados json
app.use(express.urlencoded({extended: false}));//tratar requisições html (formulários)

app.get('/', (req, res) => {
    res.send('Bem-Vindo!');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'cadastro.html'));
})

app.post('/cadastro', (req, res) => {
    const { nome, telefone, servico, descricao } = req.body;
    console.log(`Nome = ${nome} Telefone = ${telefone} servico = ${servico} descricao = ${descricao}`);

    res.send(`Nome = ${nome} Telefone = ${telefone} servico = ${servico} descricao = ${descricao}`);
});


app.listen(port, () => {
    console.log(`Aplicação ativa em http://localhost:${port}`);
});
