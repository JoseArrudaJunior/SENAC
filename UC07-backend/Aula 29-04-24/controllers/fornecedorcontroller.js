const path = require('path');
const fornecedorModel = require('../models/fornecedorModel');
let id = 0;
let listarFornecedores = [];

class FornecedorCrontoller{
    home(req, res){
        //res.send('Rota dos fornecedor');
        res.sendFile(path.join(__dirname, '../public/html/fornecedor', 'homepagefornecedor.html'));
    }
    formFornecedor(req, res){
        res.sendFile(path.join(__dirname, '../public/html/fornecedor', 'fornecedorForm.html'));
    }
    cadastro(req, res){
        const {nome, email} = req.body;
        id++;
        let fornecedor = new fornecedorModel(id, nome, email);
        listarFornecedores.push(fornecedor);
        res.send("Dados cadastrados com sucesso!");
    }

    listarFornecedor(req, res){
        res.json({listarFornecedores})
    }

}

module.exports = new FornecedorCrontoller();