const express = require('express');
const axios = require('axios')
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));

app.get('/quemEhEsseVelho/:name', async (req, res) =>{
    const {name} = req.params;
    try{
        //consumindo uma API externa
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = response.data;
        
        res.json(
            {
                nome:   pokemon.name,
                altura: pokemon.height,
                peso: pokemon.weight,
               // imagem: pokemon.sprites.versions.generation-v.black-white.animated.front_default
                imagem: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
            } 
        );
    }catch(error){
        res.status(500).json({error: 'Erro ao obter os dados do pokémon'})
    }
});

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})

