//1 - Calcule o preço total de um produto após aplicar um desconto de 20%

function calculardesconto(){
    let preco = prompt("Digite o preço do PRODUTO:")
    let desconto = prompt("Digite o percentual do DESCONTO:")
    let novoPreco = preco - (preco*(desconto/100))
    console.log(novoPreco)
    alert("Novo Preço é: " + novoPreco)
}
function convcelsiusfare(){
    let celcius = prompt("Digite a Temperatura em Celsius:")
    let novaTemp = (celcius*(9/5)) + (32)
    console.log(novaTemp)
    alert("A temperatura em Fahrenheit é: " + novaTemp)
}

function calcareaperimretangulo(){
    let base = prompt("Digite a Base do Retangulo:")
    let altura = prompt("Digite a Altura do Retangulo:")
    let area = (base*altura)
    let perimetro = ((base*2)+(altura*2))
    console.log(area)

    alert("A Area do Retangulo é: " + area)
    alert ("O Perimetro do Retangulo é: " + perimetro)
}

function calcularidade(){
    const d= new Date().getFullYear();
    let ano = prompt("Digite o ano de nascimento:")
    let idade = (d - ano)
    console.log(idade)
    alert("A sua idade é: " + idade) 
}
