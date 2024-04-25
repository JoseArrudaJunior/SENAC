const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/contato', (req,res) =>{
    res.send('<h1> Contato com alguém </h1>');
})



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
