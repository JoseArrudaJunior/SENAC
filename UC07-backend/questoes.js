// 1) Definir 3 variaveis númericas e apresentar a maior.
// 2) Calcular a idade de alguém apartir do ano e determinar se a pessoa é: Criança, Jovem, Adulta, Idosa.
// 3) Definir uma variavel que indique o dia da semana.  (segunda a sexta) - Estudo, sábado e domingo - fim de semana.
// 4) Definir uma varivel que leia a hora atual e determine o turno dia ou noite.

let n1 = 1,  n2 = 0, n3 = 1;
if(n1>n2 && n1>n3){
    console.log(`${n1} é número maior!`);
}else if(n2>n1 && n2>n3){
    console.log(`${n2} é número maior!`);
}else if(n3>n1 && n3>n2){
    console.log(`${n3} é número maior!`);
}else if(n1==n2 && n1==n3){
    console.log(`São iguais`);
}else if(n2==n3){
    console.log(`N2 ${n2} e N3 ${n3} são iguais`);
}else if(n1==n3){
    console.log(`N1 ${n1} e N3 ${n3} são iguais`);
}else{
    console.log(`Erro`);
}

//2) Calcular a idade de alguém apartir do ano e determinar se a pessoa é: Criança, Jovem, Adulta, Idosa.
//Criança - 0 a 12
//Jovem - 13 a 17
//Adulto 18 a 59
//Idoso 60 ou mais

let idade = 2024 - 1931
if(idade>=0 && idade<=12){
    console.log(`Você é uma criança - ${idade}`)
}else if(idade<=17){
    console.log(`Você é Jovem - ${idade}`)
}else if(idade<=59){
    console.log(`Você é adulto - ${idade}`)
}else if(idade>=60){
    console.log(`Você é Idoso - ${idade}`)
}else{
    console.log("Entrada invalida!")
}

//questão 03
let dia = "sabado"

if(dia=="segunda" || dia=="terça" || dia == "quarta" || dia=="quinta" || dia=="sexta"){
    console.log(`${dia} - dia de Estudar`)
}else if(dia=="sabado" || dia=="domingo"){
    console.log(`${dia} - dia de Descansar`)
}else{
    console.log("Erro")
}
//questão 04
let tempo = {hora: new Date().getHours(), minutos: new Date().getMinutes()}
// tempo.hora = 18;
// tempo.minutos = 1;
if(tempo.hora>=6 && tempo.hora<=18){
    if(tempo.hora==18 && tempo.minutos>0){
        console.log(`Após às 18h é noite`)
        return
    }
    console.log(`Dia`)
}else{
    console.log(`Noite`)
}
