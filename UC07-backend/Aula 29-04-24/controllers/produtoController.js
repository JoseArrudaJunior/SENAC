const path = require('path');
const produtoModel = require('../models/produtoModel');

class ProdutoController{
    home(req, res){
        res.send('Essa é a rota inicial dos produtos');
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../public', 'produtoForm.html'))
    }
}
module.exports = new ProdutoController();
