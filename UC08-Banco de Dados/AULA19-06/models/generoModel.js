const db = require('../database/db');

class Genero {
    async listarGeneros() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM GENERO', (error, results) => {
                if (error) {
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async cadastrarCurso(descricao) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO CURSO (DESCRICAO) VALUES (?)', [descricao], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async atualizarGenero(id, descricao) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE GENERO SET DESCRICAO = ? WHERE ID = ?', [descricao, id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async deletarGenero(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM GENERO WHERE ID = ?', [id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = new Genero();
