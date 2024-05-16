// Importa o framework Express
const express = require('express');

// Inicializa o aplicativo Express
const app = express();

// Define a porta em que o servidor irá escutar
const port = 3000;

// Importa o módulo 'path' para lidar com caminhos de arquivo
const path = require('path');

// Importa as rotas definidas para os cursos
const vinhoRoutes = require('./routes/viniculaRoutes'); // Importando o arquivo de rotas dos cursos

// Configurações de middleware do Express

// Define o middleware para servir arquivos estáticos a partir do diretório 'public'
app.use(express.static('public'));

// Define o middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Define o middleware para analisar o corpo das solicitações como dados codificados no formato URL
app.use(express.urlencoded({ extended: false }));

// Usa as rotas definidas para os cursos
app.use(vinhoRoutes);

// Rota padrão para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html')); // Envia o arquivo HTML da página inicial
});

// Inicia o servidor Express e o faz escutar na porta especificada
app.listen(port, () => {
    console.log(`http://localhost:${port}`); // Exibe uma mensagem indicando que o servidor está rodando e a porta em que está escutando
});