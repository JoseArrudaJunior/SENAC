const filme = require('../models/filmeModel');

class FilmeController {


    async listarFilmes(req, res) {
        const filmes = await filme.listarFilmes();
        res.json(filmes);

    }

}
module.exports = new FilmeController();