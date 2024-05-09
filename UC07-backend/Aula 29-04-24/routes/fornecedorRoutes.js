const express = require('express');
const fornecedorCrontoller = require('../controllers/fornecedorcontroller');
const router = express.Router();

router.get('/', fornecedorCrontoller.home);
router.get('/cadastro', fornecedorCrontoller.formFornecedor);
router.get('/listarFornecedores', fornecedorCrontoller.listarFornecedor);
router.post('/cadastro', fornecedorCrontoller.cadastro);

module.exports = router;