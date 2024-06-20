const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Olá mundo!');
});

app.get('/filmes', (req,res) =>{
    db.query('SELECT * FROM FILMES', (error, results) =>{
        if(error){
            res.status(500).send('Erro ao executar a consulta sql');
            return
        }
        res.json(results);
    });
});

app.get('/questao01/', (req, res) =>{
    db.query('SELECT * FROM FILMES, GENERO WHERE ID_GENERO = GENERO.ID', (error, results) =>{
        if(error){
            res.status(500).send('Erro ao executar a consulta sql');
            return
        }
        res.json(results);
    })
});

app.get('/buscarFilme/:id', (req, res) =>{
    const id = req.params.id;
    db.query(`SELECT * FROM FILMES WHERE NOME LIKE '${id}%'`, (error, results) =>{
        if(error){
            res.status(500).send('Erro ao executar a consulta sql');
            return
        }
        if(results.length==0){
            res.json('Nenhum Filme encontrado');
            return
        }
        res.json(results);
    })
});

app.post('/cadastro', (req,res)=>{
    const {id, nome, idgenero} = req.body;
    console.log(id, nome, idgenero);
    db.query(`INSERT INTO FILMES (ID, NOME, ID_GENERO) VALUES ('${id}', '${nome}', '${idgenero}')`, (error, results) =>{
        if(error){
            res.status(500).send('Erro ao executar a instrução sql');
            return
        }
        res.json(results);
    });
});








app.listen(port,()=>{
    console.log(`aplicação rodando em http://localhost:${port}`)
}); 
