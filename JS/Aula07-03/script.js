//1- Calcule o preço total de um produto após aplicar um desconto de 20%.
// function calcularDesconto(){
//     let preco = prompt("Digite o preço do produto:")
//     let desconto = prompt("Digite o percentual de Desconto:")
//     let novoPreco = preco - (preco*(desconto/100)) 
//     console.log(novoPreco)
//     const d = new Date().getFullYear();
//     alert("Novo Preço é " + novoPreco)
//     console.log(d)
// }

function calcularDesconto(){
    // let preco = prompt("Digite o preço do PRODUTO:")
    // let desconto = prompt("Digite o percentual do DESCONTO:")
    // let novoPreco = preco - (preco*(desconto/100))
    // console.log(novoPreco)
    // alert("Novo Preço é: " + novoPreco)
    // let preco = prompt("Digite o preço do PRODUTO:")
    // let desconto = prompt("Digite o percentual do DESCONTO:")
    // let novoPreco = preco - (preco*(desconto/100))
    // console.log(novoPreco)
    // alert("Novo Preço é: " + novoPreco)
    let preco = document.getElementById('preco')
    let desconto = document.getElementById('desconto')
    let resultado =  document.getElementById('resultado01')
    let novoPreco = preco.value - (preco.value*(desconto.value/100))
    // resultado.innerText = "Novo Preço = " + novoPreco
   resultado.innerText = `Novo Preço = ${novoPreco} `
}

let botao01 = document.getElementById("questao01")
botao01.addEventListener("click", calcularDesconto)

function convCelsiusFare(){
    let celsius = document.getElementById('celsius')
    let resultado =  document.getElementById('resultado02')
    let fahrenheit = celsius.value*(9/5) + (32)
       resultado.innerText = `Em Fahrenheit = ${fahrenheit} `
}
let botao02 = document.getElementById("questao02")
botao02.addEventListener("click", convCelsiusFare)

function calcareaperimretangulo(){
    let base = document.getElementById('base')
    let altura = document.getElementById('altura')
    let resultado = document.getElementById('resultado03')
    let area = (base.value)*(altura.value)
    let perimetro = (base.value*2)+(altura.value*2)
    resultado.innerText = `A area é ${area} e o Perimetro é ${perimetro}`
}
let botao03 = document.getElementById("questao03")
botao03.addEventListener("click", calcareaperimretangulo)


function calcularidade(){
    const d= new Date().getFullYear();
    let resultado = document.getElementById('resultado04')
    let ano = document.getElementById('nascimento').value
    let idade = (d - ano)
    resultado.innerText = `A sua idade é: ${idade}`
}

let botao04 = document.getElementById("questao04")
botao04.addEventListener("click", calcularidade)


