// Importa o modelo de curso e o inicializa
const Vinho = require('../models/vinho');
const vinhoModel = new Vinho();

// Importa o módulo 'path' para lidar com caminhos de arquivo
const path = require('path');

// Define a classe VinhoController para gerenciar operações relacionadas aos cursos
class VinhoController {
    // Método para obter todos os cursos
    getAllVinhos(req, res) {
        const vinhos = vinhoModel.getAllVinhos(); // Obtém todos os cursos do modelo
        res.json(vinhos); // Retorna os cursos em formato JSON
    }

    // Método para criar um novo curso
    createvinho(req, res) {
        const { name, description } = req.body; // Extrai o nome e a descrição do corpo da solicitação
        const newVinho = vinhoModel.createVinho(name, description); // Cria um novo curso com os dados fornecidos
        //res.status(201).json(newVinho); // Retorna o novo curso em formato JSON com o código de status 201 (Created)
        res.status(201).redirect('/'); // Redireciona para a página inicial após a criação do curso
    }

    // Método para obter um curso por ID
    getVinhoById(req, res) {
        const vinhoId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const vinho = vinhoModel.getVinhoById(vinhoId); // Obtém o curso com o ID fornecido
        if (!vinho) {
            return res.status(404).json({ msg: 'Vinho not found' }); // Retorna um erro se o curso não for encontrado
        }
        res.json(vinho); // Retorna o curso encontrado em formato JSON
    }

    // Método para excluir um curso por ID
    deleteVinho(req, res) {
        const vinhoId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const vinhoDeleted = vinhoModel.deleteVinho(vinhoId); // Exclui o curso com o ID fornecido
        if (!vinhoDeleted) {
            return res.status(404).json({ msg: 'Vinho not found' }); // Retorna um erro se o curso não for encontrado
        }
        //res.redirect('/'); // Redireciona para a página inicial após a exclusão do curso
        res.json({ msg: 'Vinho deleted sucessfully' }); // Retorna uma mensagem de sucesso em formato JSON
    }

    // Método para exibir o formulário de edição de um curso
    formEditVinho(req, res) {
        const vinhoId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html')); // Envia o arquivo de formulário de edição HTML
    }
    homecliente(req, res) {
        res.sendFile(path.join(__dirname, '../public/html', 'cliente.html')); // Envia o arquivo de formulário de edição HTML
    }

    // Método para atualizar um curso por ID
    updateVinho(req, res) {
        const vinhoId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const { name, description } = req.body; // Extrai o novo nome e descrição do corpo da solicitação
        const vinhoUpdate = vinhoModel.updateVinho(vinhoId, name, description); // Atualiza o curso com os novos dados
        if (!vinhoUpdate) {
            return res.status(404).json({ msg: 'Vinho not found' }); // Retorna um erro se o curso não for encontrado
        }
        res.json({ vinhoUpdate }); // Retorna o curso atualizado em formato JSON
    }
}

// Exporta uma instância da classe VinhoController
module.exports = new VinhoController();

