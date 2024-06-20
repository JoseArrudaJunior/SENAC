const genero = require('../models/generoModel');

class GeneroController {


    async listarGenero(req, res) {
        const generos = await genero.listarGenero();
        res.json(generos);

    }

}
module.exports = new GeneroController();