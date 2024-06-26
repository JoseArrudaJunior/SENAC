const db = require('../database/db');

// Define a classe Course para representar cursos e suas operações
class Course {

    // Método para retornar todos os cursos
    async getAllCourses() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM CURSO', (error, results) => {
                if (error) {
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Método para criar um novo curso com o nome e a descrição fornecidos
    async createCourse(name, description) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO CURSO (nome, descricao) VALUES (?)', [name, description], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Método para buscar um curso pelo ID fornecido
    async getCourseById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM CURSO WHERE ID = ?', [id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Método para deletar um curso pelo ID fornecido
    async deleteCourse(id) {
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

    // Método para atualizar o nome e a descrição de um curso pelo ID fornecido
    async updateCourse(id, name, description) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE CURSO SET DESCRICAO = ? WHERE ID = ?', [id, name, description], (error, results) => {
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

// Exporta a classe Course para ser utilizada em outros arquivos
module.exports = Course;