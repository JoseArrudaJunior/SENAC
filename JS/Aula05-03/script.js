


let titulo = document.getElementById("titulo")
console.log(typeof titulo)
console.log(titulo.innerText)

function verificartexto(){
    let entrada = document.getElementById('nome')
    if(entrada.value.length<5){
        entrada.className = "erro"
        alert("Valor menor que 5")
    }else{
        alert("Valor maior ou igual a 5")
    }
}
