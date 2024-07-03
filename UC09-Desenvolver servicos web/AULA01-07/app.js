const express = require('express');
const app = new express();
require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`aplicação rodando em http://${process.env.DB_HOST}:${port}`)
});

