const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();
router.get('/', produtoController.home);
router.get('/cadastro', produtoController.formCadastro);
router.post('/cadastro',produtoController.cadastro);
router.get('/listagem', produtoController.listagem);
router.get('/visualizar', produtoController.visualizarProdutos);

module.exports = router;
