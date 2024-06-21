async function listarFilmes(){
    let listaFilmes = document.getElementById('listaFilmes');
    const response = await fetch('/filmes');
    const filmes = await response.json();
    filmes.forEach(filme => {
        let li = document.createElement('li');
        li.textContent = `${filme.id} - ${filme.nome} - ${filme.id_genero}`;
        listaFilmes.appendChild(li);
    });
}
async function listarGeneros(){
    let listaGeneros = document.getElementById('listaGeneros');
    const response = await fetch('/generos');
    const generos = await response.json();
    generos.forEach(genero => {
        let li = document.createElement('li');
        li.textContent = `${genero.id} - ${genero.descricao}`;
        listaGeneros.appendChild(li);
    });
}

listarFilmes();
listarGeneros();

