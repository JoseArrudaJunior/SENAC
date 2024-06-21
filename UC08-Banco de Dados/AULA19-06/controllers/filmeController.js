// controllers/filmeController.js
const filme = require('../models/filmeModel');

class FilmeController {
    async listarFilmes(req, res) {
        const filmes = await filme.listarFilmes();
        res.json(filmes);
    }

    async cadastrarFilme(req, res) {
        const { nome, id_genero } = req.body;
        try {
            await filme.cadastrarFilme(nome, id_genero);
            res.status(200).json({ message: 'Filme cadastrado com sucesso.' });
        } catch (error) {
            console.error('Erro ao cadastrar filme:', error);
            res.status(500).json({ error: 'Erro interno ao cadastrar filme.' });
        }
    }

    async atualizarFilme(req, res) {
        const { id } = req.params;
        const { nome, id_genero } = req.body;
        try {
            await filme.atualizarFilme(id, nome, id_genero);
            res.status(200).json({ message: 'Filme atualizado com sucesso.' });
        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
            res.status(500).json({ error: 'Erro interno ao atualizar filme.' });
        }
    }

    async deletarFilme(req, res) {
        const { id } = req.params;
        try {
            await filme.deletarFilme(id);
            res.status(200).json({ message: 'Filme removido com sucesso.' });
        } catch (error) {
            console.error('Erro ao remover filme:', error);
            res.status(500).json({ error: 'Erro interno ao remover filme.' });
        }
    }
}

module.exports = new FilmeController();
