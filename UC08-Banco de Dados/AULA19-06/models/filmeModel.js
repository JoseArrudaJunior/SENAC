const db = require('../database/db');

class Filme {
    async listarFilmes() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM FILMES', (error, results) => {
                if (error) {
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async cadastrarFilme(nome, id_genero) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO FILMES (NOME, ID_GENERO) VALUES (?, ?)', [nome, id_genero], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async atualizarFilme(id, nome, id_genero) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE FILMES SET NOME = ?, ID_GENERO = ? WHERE ID = ?', [nome, id_genero, id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async deletarFilme(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM FILMES WHERE ID = ?', [id], (error, results) => {
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

module.exports = new Filme();
