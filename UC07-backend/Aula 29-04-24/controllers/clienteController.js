const path = require('path');
const clienteModel = require('../models/clienteModel');
let id = 0;
let listaCliente = []

class ClienteController {
    home(req, res) {
        res.send('Essa é a rota home dos clientes');
    }
    formCadastro(req, res) {
        res.sendFile(path.join(__dirname, '../public/html', 'clienteForm.html'));
    }

    cadastro(req, res) {
        const { nome, cpf } = req.body;
        id++;
        let cliente = new clienteModel(id, nome, cpf);
        listaCliente.push(cliente);
        res.send({ "Dados gravados com Sucesso!": cliente });
    }
    listagem(req, res) {
        res.json(listaCliente)
    }
}

module.exports = new ClienteController()