const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jumy0707',
    database: 'senac'
});

module.exports = connection;