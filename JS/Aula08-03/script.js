
function clean() {
    document.getElementById("resultado").innerText = "";
}

// Função para voltar um caractere no visor da calculadora
function back() {
    let resultado = document.getElementById("resultado").innerText;
    document.getElementById("resultado").innerText = resultado.substring(0, resultado.length - 1);
}

// Função para inserir um caractere no visor da calculadora
function insert(caractere) {
    document.getElementById("resultado").innerText += caractere;


}

// Função para calcular a expressão no visor da calculadora
function calcular() {
    let visor = document.getElementById("resultado").innerText;
    let expressao = visor.replaceAll("x", "*");
    let resultado;
    try {
        resultado = eval(expressao);
    } catch (error) {
        resultado = "Erro";
    }
    document.getElementById("resultado").innerText = resultado;
}