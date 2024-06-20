const db = require('../database/db');

class Filme {


    //     listarFilmes(){
    //         db.query('SELECT * FROM FILMES', (error, results) =>{
    //             if(error){
    //                 console.log('Erro ao executar a consulta sql');
    //                 return
    //             }
    //             return results;
    //         });
    //     }    

    // }

    async listarFilmes() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM FILMES', (error, results) => {
                if (error) {
                    conseole.log('Erro ao executar a consulta sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })
    }
}

module.exports = new Filme();