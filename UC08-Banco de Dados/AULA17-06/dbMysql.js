const mysql = require('mysql2');

//configuração da conexão


const conection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: 'Jumy0707',
        database: 'videolocadora',
})


module.exports = conection;
