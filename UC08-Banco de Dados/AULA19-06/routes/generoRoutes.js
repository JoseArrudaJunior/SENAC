const generocontroller = require('../controllers/generoController');
const express = require('express');
const router = express.Router();

router.get('/genero', generocontroller.listarGenero);


module.exports = router;