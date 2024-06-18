const db = require ('./dbMysql');

const bdmodel = {
    getData:(callback) => {
        db.query('select * from filmes', [], function(error, results){
            callback(error, results);
        });
    }
}
module.exports = bdmodel;