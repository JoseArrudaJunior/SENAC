// Array com nomes de cores
let cores = ["Azul", "Verde", "Vermelho"];
let body = document.getElementsByTagName('body')

// Seleciona os parágrafos onde as cores serão exibidas
let paragrafos = document.querySelectorAll(".cor");

// Itera sobre o array de cores e adiciona cada cor a um parágrafo
cores.forEach(function(cor, indice) {
    paragrafos[indice].textContent = cor;
});
