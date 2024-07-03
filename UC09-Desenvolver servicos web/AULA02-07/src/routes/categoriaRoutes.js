const categoriaController = require('../controllers/categoriaController');
const express = require('express');
const router = express.Router();

router.get('/listar', categoriaController.listarCategorias);
router.post('/criar', categoriaController.criarCategoria);
router.put('/atualizar/:id', categoriaController.atualizarCategoria);


module.exports = router;


