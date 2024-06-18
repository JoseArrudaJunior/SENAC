const bd = require('./modelBD');

bd.getData((error, results)=>{
    if(error){
        console.error('Erro ao buscar os dados', error);
        return;
    }
    console.log('Dados encontrados', results);
});
