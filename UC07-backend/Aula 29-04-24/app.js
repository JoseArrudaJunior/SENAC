const express = require('express');
const app = express();
const port = 3000;
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/produto', produtoRoutes);
app.use('/cliente', clienteRoutes);

app.get('/', (req, res) => {
    res.send('Hojé o dia Amanheceo Chuvoso');
});

app.listen(port, () => {
    console.log(`Aplicação usando a porta http://localhost:${port}`);
});