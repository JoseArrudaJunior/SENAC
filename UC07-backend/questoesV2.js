function ehMaior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else if (n3 > n1 && n3 > n2) {
        return n3;
    } else if (n1 == n2 && n1 == n3) {
        return `São iguais`;
    } else if (n1 == n2) {
        return `N1 ${n1} e N2 ${n2} são iguais`;
    } else if (n1 == n3) {
        return `N1 ${n1} e N3 ${n3} são iguais`;
    } else if (n2 == n3) {
        return `N2 ${n1} e N3 ${n3} são iguais`;
    } else {
        return `Erro`;
    }
}
console.log(ehMaior(8, 6, 7))
console.log(ehMaior(8, 8, 7))

function calcularIdade(anoNascimento) {
    let idade = (new Date().getFullYear()) - anoNascimento
    if (idade >= 0 && idade <= 12) {
        return `Você é uma criança - ${idade}`
    } else if (idade <= 17) {
        return `Você é Jovem - ${idade}`
    } else if (idade <= 59) {
        return `Você é adulto - ${idade}`
    } else if (idade >= 60) {
        return `Você é Idoso - ${idade}`
    } else {
        return "Entrada invalida!";
    }
}
console.log(calcularIdade(1932))
console.log(calcularIdade(2001))
console.log(calcularIdade(1956))

function verificarDia(dia) {
    let diaSemana = dia.toLowerCase() //transformar a string em minusculo 
    switch (diaSemana) {
        case 'sábado':
        case 'domingo':
            return `Pode descansar consagrado!`
            break
        case 'segunda':
        case 'terça':
        case 'quarta':
        case 'quinta':
        case 'sexta':
            return `Pode estudar você não é herdeiro!`
            break
        default:
            return `Entrada inválida`
            break
    }
}
console.log(verificarDia('segunda'))
console.log(verificarDia('SABADO'))


function diaNoite(hora){
    if(hora>=6 && hora<=17){
        return `Dia`
    }else{
        return `Noite`
    }
}
console.log(diaNoite(new Date().getHours()))
console.log(diaNoite(9))

module.exports = {ehMaior,calcularIdade,verificarDia,diaNoite}