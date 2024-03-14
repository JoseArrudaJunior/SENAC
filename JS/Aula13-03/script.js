
function convKmM(){
    let Km = document.getElementById('Km')
    let resultado =  document.getElementById('res')
    let metro = Km.value/(0.001)
       resultado.innerText = `Em Metro = ${metro} `
}
let botao01 = document.getElementById("Converta")
botao01.addEventListener("click", convKmM)
