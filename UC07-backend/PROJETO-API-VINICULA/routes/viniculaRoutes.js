// Importa o controlador de curso para manipular as operações relacionadas aos cursos
const vinhoController = require('../controllers/vinhoController');

// Importa o framework Express
const express = require('express');

// Cria um novo roteador do Express
const router = express.Router();

// Define as rotas para lidar com diferentes operações de curso

// Rota para listar todos os cursos
router.get('/vinhos', vinhoController.getAllVinhos);

// Rota para buscar um curso por ID
router.get('/vinhos/buscar/:id', vinhoController.getVinhoById);

// Rota para cadastrar um novo curso
router.post('/vinhos/create', vinhoController.createvinho);

// Rota para atualizar um curso por ID
router.put('/vinhos/:id', vinhoController.updateVinho);

// Rota para deletar um curso por ID
router.delete('/vinhos/:id', vinhoController.deleteVinho);

// Rota para renderizar o formulário de edição de um curso
router.get('/vinhos/edit/:id', vinhoController.formEditVinho);

router.get('/vinhos/cliente/', vinhoController.homecliente);

// Exporta o roteador para ser utilizado em outras partes da aplicação
module.exports = router;