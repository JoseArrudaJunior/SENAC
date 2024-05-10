const express = require('express');
const fornecedorCrontoller = require('../controllers/fornecedorController');
const router = express.Router();

router.get('/', fornecedorCrontoller.home);
router.get('/cadastro',fornecedorCrontoller.formCadastro);
router.get('/listarFornecedores', fornecedorCrontoller.listarClientes);
router.post('/cadastro', fornecedorCrontoller.cadastro);
router.get('/visualizar', fornecedorCrontoller.visualizarFornecedores);

module.exports = router;