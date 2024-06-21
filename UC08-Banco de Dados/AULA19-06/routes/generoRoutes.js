const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

router.get('/generos', generoController.listarGeneros);
router.post('/generos/cadastro', generoController.cadastrarGenero);
router.put('/generos/:id', generoController.atualizarGenero);
router.delete('/generos/:id', generoController.deletarGenero);

module.exports = router;
