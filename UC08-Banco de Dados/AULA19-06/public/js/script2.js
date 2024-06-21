async function listarFilmes() {
    let listaFilmes = document.getElementById('listaFilmes');
    listaFilmes.innerHTML = '';
    const responseFilmes = await fetch('/filmes');
    const filmes = await responseFilmes.json();
    const responseGeneros = await fetch('/generos');
    const generos = await responseGeneros.json();
    const generoMap = new Map(generos.map(genero => [genero.id, genero.Descricao]));

    filmes.forEach(filme => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${filme.id}</td>
            <td>${filme.nome}</td>
            <td>${generoMap.get(filme.id_genero) || 'Gênero não encontrado'}</td>
            <td>
                <button type="button" onclick="editarFilme(${filme.id})">Editar</button>
                <button type="button" onclick="removerFilme(${filme.id})">Excluir</button>
            </td>
        `;
        listaFilmes.appendChild(tr);
    });
}

async function listarGeneros() {
    let listaGeneros = document.getElementById('listaGeneros');
    listaGeneros.innerHTML = '';
    const response = await fetch('/generos');
    const generos = await response.json();

    generos.forEach(genero => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${genero.id}</td>
        <td>${genero.Descricao}</td>
        <td>
            <button type="button" onclick="editarGenero(${genero.id})">Editar</button>
            <button type="button" onclick="removerGenero(${genero.id})">Excluir</button>
        </td>
    `;
        listaGeneros.appendChild(tr);
    });

    // Preencher o select de gêneros no formulário de filmes
    let generoSelect = document.getElementById('genero');
    generoSelect.innerHTML = '';
    generos.forEach(genero => {
        let option = document.createElement('option');
        option.value = genero.id;
        option.textContent = genero.Descricao;
        generoSelect.appendChild(option);
    });
}
// scripts.js

async function editarFilme(id) {
    const nome = prompt('Digite o novo nome do filme:');
    const id_genero = prompt('Digite o novo ID do gênero:');
    if (nome && id_genero) {
        const response = await fetch(`/filmes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, id_genero })
        });
        if (response.ok) {
            alert('Filme atualizado com sucesso.');
            window.location.reload();
        } else {
            alert('Erro ao atualizar filme.');
        }
    }
}

async function removerFilme(id) {
    const confirmacao = confirm('Tem certeza que deseja excluir este filme?');
    if (confirmacao) {
        const response = await fetch(`/filmes/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            alert('Filme removido com sucesso.');
            window.location.reload();
        } else {
            alert('Erro ao remover filme.');
        }
    }
}

async function editarGenero(id) {
    const descricao = prompt('Digite a nova descrição do gênero:');
    if (descricao) {
        const response = await fetch(`/generos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ descricao })
        });
        if (response.ok) {
            alert('Gênero atualizado com sucesso.');
            window.location.reload();
        } else {
            alert('Erro ao atualizar gênero.');
        }
    }
}

async function removerGenero(id) {
    const confirmacao = confirm('Tem certeza que deseja excluir este gênero?');
    if (confirmacao) {
        const response = await fetch(`/generos/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            alert('Gênero removido com sucesso.');
            window.location.reload();
        } else {
            alert('Erro ao remover gênero.');
        }
    }
}

listarFilmes();
listarGeneros();
