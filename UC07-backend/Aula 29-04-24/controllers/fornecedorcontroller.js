const path = require('path');
const fornecedorModel = require('../models/fornecedorModel');
let id = 0;
let listaFornecedores = [];

class FornecedorCrontoller{
    home(req, res){
       
        res.sendFile(path.join(__dirname, '../public/html/fornecedor', 'homepageFornecedor.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../public/html/fornecedor', 'fornecedorForm.html'));
    }
    cadastro(req, res){
        const {nome, email, cnpj, endereco} = req.body;
        id++;
        let fornecedor = new fornecedorModel(id, nome, email, cnpj, endereco);
        listaFornecedores.push(fornecedor);
        //res.send("Dados cadastrados com sucesso!");
        res.redirect('/fornecedor');
    }

    listarClientes(req, res){
        res.json({listaFornecedores})
    }

    visualizarFornecedores(req, res){
        res.sendFile(path.join(__dirname, '../public/html/fornecedor', 'listarFornecedores.html'));
    }
}

module.exports = new FornecedorCrontoller();