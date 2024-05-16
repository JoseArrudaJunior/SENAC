//Tipos de dados
// Tipo Primitivo
const n = 7; 
let nome = "Joel";
var idade = 9;
//Const não pode ser retribuida e está sempre delimitada pelo bloco. {}
//let pode ser reatribuido e está sempre delimitada pelo bloco.
//var pode ser reatribuido e não está delimitada pelo bloco.

//Tipo abstrato (objetos)
 const dados = {"nome": "Joel", "telefone":8498888}
 const matriz = [1 ,2, 4, "Maria", "João", 9.0]  

//Estruturas condicionais 
// 1- Simples , 2- Composta, 3 - Composta encadeada.

//operadores relacionais (<, > <=, >=, !=, !==, ==, ===)
if(5<9)
{
    console.log("Verdade!")
}
if(5<=9){
    console.log("Verdade!")
}
if(5!=='5'){
    console.log("Verdade!")
}
//compostas
if(5>9)
{
    console.log("Verdade!")
}else{
    console.log("Mentira!")
}
//Operadore lógicos ! (negação) && ||
//&& todas as condições tem que ser verdade 
//|| basta apenas uma condição ser verdade 
if(5>=5 && 8<9 && 0<=-1) {
    console.log("Correto");
}else{
    console.log("incorreto");
}

if(5<=5 || 8>=9 || 0<=-1) {
    console.log("Correto");
}else{
    console.log("incorreto");
}

if(5>9){
    console.log("cinco maior que nove");
}else if(5>7){
    console.log("cinco mairo que sete");
}else if(5<=6){
    console.log("cinco menor ou igual a seis");
}else{
    console.log("sei lá");
}

const n4 = 10;

console.log(`O valor maior é ${n4}`)



