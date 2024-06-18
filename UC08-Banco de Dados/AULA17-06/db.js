const sql = require('mssql');

//configuração da conexão

const config = {
    user: 'root',
    password: 'Jumy0707',
    server: 'DESKTOP-6KSMK6K\\SQLEXPRESS',
    database: 'MCTEC',
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

//Função de conexão com o banco

const conectionBD = async () => {
    try {
        const pool = await sql.connect(config);
        conseole.log('Conexão bem sucedida');
    } catch (err) {
        console.error('Erro ao se conectar com o Sql Server:', err);
        throw err;
    }
};

conectionBD();
